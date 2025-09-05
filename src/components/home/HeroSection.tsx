import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function HeroSection() {
  return (
    <div className="relative mx-auto max-w-xl text-center pt-20 sm:pt-32">
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        Your curated feed of the latest
        <PointerHighlight containerClassName="inline-block mx-2 leading-none">
          <span className="relative z-10 text-zinc-400">gaming news.</span>
        </PointerHighlight>
      </h1>
      <p className="mt-4 text-zinc-500 text-lg sm:text-xl">
        Search posts and discussions from your favorite subreddits.
      </p>
    </div>
  );
}
