import {
  LinkedinIcon,
  GitHubIcon,
  ArrowIcon,
  GmailIcon,
} from "components/icons";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>

      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          My development journey began in September 2021, the same time I
          enrolled at UBC, initially as a Bachelor of Commerce student
        </p>
        <p>
          As a primarily self-taught developer, I've taken a{" "}
          <b>project-focused approach to learning</b>, which has helped improve
          my resourcefulness and efficiency
        </p>
        <p>
          <Link href={"/portfolio"}>Through my projects</Link>, I've explored
          various areas of development, such as creating a 2D multiplayer game
          using Unity, releasing a mobile application with Flutter SDK, and
          exploring full-stack web development.
        </p>
        <p>My goals for 2023 are to</p>
        <ol>
          <li>Take more pictures</li>
          <li>Deadlift 600lbs</li>
          <li>Finally dunk a basketball</li>
          <li>Learn more Mandarin</li>
          <li>Build websites for 10 companies</li>
        </ol>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:jamesshi117@gmail.com"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GmailIcon />
              <div className="ml-3">Gmail</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jshiii117"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/jamesshi117/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedinIcon />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
