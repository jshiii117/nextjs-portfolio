import {
  LinkedinIcon,
  GitHubIcon,
  ArrowIcon,
  GmailIcon,
} from "components/icons";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Portfolio</h1>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>Some of my favourite past projects</p>
        <div className="my-6  border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
          <h2 className="font-bold text-xl mb-2">Project Title</h2>
          <img
            src="https://unsplash.com/random"
            alt="project image"
            className="rounded-lg w-full md:w-1/2 mx-auto"
          />
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            veniam aperiam sed officiis placeat ipsam dolore hic nesciunt!
            Reiciendis mollitia unde omnis architecto a minima, reprehenderit
            dolor dolorum. Ex, animi?.
          </p>
          <div className="flex items-center justify-start space-x-4">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="technology icon"
              width={25}
              height={25}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="technology icon"
              width={25}
              height={25}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="technology icon"
              width={25}
              height={25}
            />
          </div>
        </div>
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
