"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from 'next/navigation';
import { useForm } from "@tanstack/react-form";

export function SearchForm() {
  const form = useForm({
    defaultValues: {
      keyword: "",
    },
    onSubmit: async ({ value }) => {
      const params = new URLSearchParams();
      if (value.keyword) params.set("keyword", value.keyword);
      redirect(`/search?${params.toString()}`);
    },
  });

  return (
    <div className="relative z-10 w-full max-w-xl mx-auto mt-16 sm:mt-24">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex items-center space-x-2"
      >
        <form.Field
          name="keyword"
        >
          {(field) => (
            <Input
              type="text"
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Search for a keyword..."
              className="flex-1 rounded-full px-5 py-6 bg-white/5 border-zinc-700 text-white placeholder-zinc-500 transition-all duration-300 focus:border-blue-500"
            />
          )}
        </form.Field>
        <Button
          type="submit"
          className="rounded-full px-8 py-6 bg-zinc-800 text-white font-semibold hover:bg-zinc-700 transition-colors duration-200"
          disabled={form.state.isSubmitting}
        >
          {form.state.isSubmitting ? "Searching..." : "Search"}
        </Button>
      </form>
    </div>
  );
}
