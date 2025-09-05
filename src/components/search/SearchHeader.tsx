import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SearchHeaderProps {
  keyword: string;
}

export function SearchHeader({ keyword }: SearchHeaderProps) {
  // Dynamic list of subreddits to display
  const subreddits = [
    "gaming", "pcgaming", "xboxone", "NintendoSwitch",
    "nintendo", "gamingnews", "playstation", "Steam"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 mb-6">
      <div className="text-center sm:text-left mb-6 sm:mb-0">
        <Link href="/" className="flex items-center text-zinc-400 hover:text-zinc-300 transition-colors">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          <span className="text-sm">Back to Home</span>
        </Link>
      </div>

      <div className="w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Results for &ldquo;{keyword}&rdquo;</h1>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-zinc-400">
          <p className="mr-2 hidden md:block">Searching in:</p>
          {subreddits.map(sub => (
            <Badge key={sub} variant="secondary" className="bg-zinc-800 text-zinc-300 border-zinc-700">
              r/{sub}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
