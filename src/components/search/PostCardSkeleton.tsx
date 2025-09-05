import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PostCardSkeleton() {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-zinc-700 hover:border-zinc-500 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-500/10">
      <CardHeader className="pb-3">
        <Skeleton className="h-6 w-3/4 bg-zinc-700 rounded-lg" />
        <Skeleton className="h-4 w-1/2 bg-zinc-800 rounded-lg mt-2" />
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="h-4 w-1/4 bg-zinc-800 rounded-lg" />
          <Skeleton className="h-4 w-1/4 bg-zinc-800 rounded-lg" />
        </div>
        <Skeleton className="h-4 w-1/3 bg-zinc-800 rounded-full" />
      </CardContent>
    </Card>
  );
}
