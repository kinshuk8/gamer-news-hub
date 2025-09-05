import { PostCard } from "./PostCard";
import { PostCardSkeleton } from "./PostCardSkeleton";
import { RedditPost } from "@/lib/types";

interface PostsGridProps {
  posts: RedditPost[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export function PostsGrid({ posts, isLoading, isError, error }: PostsGridProps) {
  return (
    <div className="w-full max-w-4xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-6">
      {isLoading && (
        <>
          <PostCardSkeleton /><PostCardSkeleton /><PostCardSkeleton />
          <PostCardSkeleton /><PostCardSkeleton /><PostCardSkeleton />
        </>
      )}

      {isError && (
        <div className="col-span-full text-center text-red-400">
          <p>Error: {error?.message}</p>
        </div>
      )}

      {!isLoading && posts && posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post.data.id} post={post} />
        ))
      ) : (
        !isLoading && <p className="col-span-full text-center text-zinc-400">No posts found for this keyword.</p>
      )}
    </div>
  );
}
