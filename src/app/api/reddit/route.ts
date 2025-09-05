import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get('keyword');
  const userSubreddits = searchParams.get('subreddits');

  // A broad, default list of subreddits if none are specified
  const subreddits = userSubreddits
    ? userSubreddits.split(',').map(s => s.trim())
    : [
        'gaming',
        'pcgaming',
        'xboxone',
        'NintendoSwitch',
        'nintendo',
        'gamingnews',
        'pcgaming',
        'gamernews',
        'playstation',
        'Steam'
      ];

  if (!keyword) {
    return NextResponse.json({ error: 'Keyword is required' }, { status: 400 });
  }

  const fetchWithRetry = async (url: string, options: RequestInit, retries = 2): Promise<Response> => {
    for (let i = 0; i <= retries; i++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout per retry

        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        });

        clearTimeout(timeoutId);
        return response;
      } catch (error) {
        console.warn(`Attempt ${i + 1} failed:`, error);
        if (i === retries) throw error;
        // Wait 1 second before retry
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    throw new Error('All retry attempts failed');
  };

  try {
    const combinedSubreddits = subreddits.join('+');
    const url = `https://www.reddit.com/r/${combinedSubreddits}/search.json?q=${encodeURIComponent(keyword)}&sort=relevance&limit=100`;

    // Use the Reddit search endpoint with retry
    const response = await fetchWithRetry(url, {
      headers: {
        'User-Agent': 'GamerNewsHub/1.0.0 (https://gamer-news-hub.vercel.app)',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error(`Reddit search API failed: ${response.status} ${response.statusText}`);
      return NextResponse.json({
        error: 'Failed to fetch posts from Reddit',
        details: `HTTP ${response.status}: ${response.statusText}`
      }, { status: 500 });
    }

    const data = await response.json();
    const posts = data.data.children || [];

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching Reddit posts:', error);

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return NextResponse.json({
          error: 'Request timeout',
          details: 'The request to Reddit took too long to complete'
        }, { status: 504 });
      }
    }

    return NextResponse.json({
      error: 'Failed to fetch posts',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
