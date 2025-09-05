import { HeroSection, SearchForm } from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-950 text-white p-6 sm:p-12">
      <HeroSection />
      <SearchForm />
    </div>
  );
}
