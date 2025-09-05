"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { SearchHeader, PostsGrid } from "@/components/search";
import { RedditPost } from "@/lib/types";

// Function to fetch posts from the corrected API endpoint
async function fetchRedditPosts(keyword: string): Promise<RedditPost[]> {
  // Keeping the API endpoint as requested by the user
  const response = await fetch(`/api/reddit?keyword=${encodeURIComponent(keyword)}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Failed to fetch posts: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.posts;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ["reddit-posts", keyword],
    queryFn: () => fetchRedditPosts(keyword),
    enabled: !!keyword,
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-950 text-white p-4 sm:p-8">
      <SearchHeader keyword={keyword} />
      <PostsGrid posts={posts} isLoading={isLoading} isError={isError} error={error} />
    </div>
  );
}
