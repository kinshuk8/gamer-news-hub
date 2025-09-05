import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RedditPost } from "@/lib/types";

interface PostCardProps {
  post: RedditPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-zinc-700 hover:border-zinc-500 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-500/10 group">
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-lg font-bold line-clamp-2 group-hover:text-zinc-100 transition-colors">
          {post.data.title}
        </CardTitle>
        <CardDescription className="text-zinc-400 text-sm">
          by u/{post.data.author} in r/{post.data.subreddit}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center mb-4 text-xs text-zinc-500">
          <span>{post.data.ups} upvotes</span>
          <span>{post.data.num_comments} comments</span>
        </div>
        <Link
          href={`https://www.reddit.com${post.data.permalink}`}
          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 inline-block font-medium hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          View on Reddit →
        </Link>
      </CardContent>
    </Card>
  );
}
