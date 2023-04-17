import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";

export const metadata: Metadata = {
  title: "Blog",
  description: "Coming soon!",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Blog page &#40;maybe&#41; coming soon!
        </p>
      </div>
    </section>
  );
}
