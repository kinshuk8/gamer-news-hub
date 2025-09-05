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

  try {
    const combinedSubreddits = subreddits.join('+');
    
    // Use the Reddit search endpoint
    const response = await fetch(
      `https://www.reddit.com/r/${combinedSubreddits}/search.json?q=${encodeURIComponent(keyword)}&sort=relevance&limit=100`,
      {
        headers: {
          'User-Agent': 'GamerNewsHub/1.0.0'
        },
        cache: 'no-store'
      }
    );

    if (!response.ok) {
      console.error(`Reddit search API failed: ${response.status}`);
      return NextResponse.json({ error: 'Failed to fetch posts from Reddit' }, { status: 500 });
    }

    const data = await response.json();
    const posts = data.data.children || [];

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching Reddit posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}