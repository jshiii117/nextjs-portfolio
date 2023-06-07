import Link from "next/link";
import Image from "next/image";
import {
  ArrowIcon,
  GitHubIcon,
  GmailIcon,
  LinkedinIcon,
} from "components/icons";
import { name, main, bio, avatar } from "lib/info";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {main()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={200}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:jamesshi117@gmail.com"
            className="flex items-center gap-2"
          >
            <GmailIcon />
            jamesshi117@gmail.com
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jshiii117/"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            jshiii117
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/jamesshi117/"
            className="flex items-center"
          >
            <LinkedinIcon />
            in/jamesshi117
          </a>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <Link
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            href="/portfolio"
          >
            <ArrowIcon />
            <p className="h-7">See my projects</p>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            href="/about"
          >
            <ArrowIcon />
            <p className="h-7">More about me</p>
          </Link>
        </li>
      </ul>
    </section>
  );
}
