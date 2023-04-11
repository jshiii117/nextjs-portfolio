import {
  LinkedinIcon,
  GitHubIcon,
  ArrowIcon,
  GmailIcon,
} from "components/icons";
import Image from "next/image";
import Link from "next/link";

interface IndividualPortfolioProjectProps {
  project: Record<string, any>;
}

export function IndividualPortfolioProject({
  project,
}: IndividualPortfolioProjectProps) {
  return (
    <>
      <div className="my-6 border border-gray-300 dark:border-gray-600 px-4 rounded-lg">
        <h2 className="font-bold text-xl mb-2">{project.title}</h2>
        <p className="my-4">{project.description}</p>
        <div className="flex items-center justify-start space-x-4">
          {project.techLogos.map((techLogo, index) => (
            <div key={index}>{techLogo}</div>
          ))}
        </div>
        <div className="flex space-x-4 items-center">
          <Link
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            href={project.repoLink}
          >
            <ArrowIcon />
            <p className="h-7">Repo</p>
          </Link>

          <Link
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            href={project.demoLink}
          >
            <ArrowIcon />
            <p className="h-7">Demo</p>
          </Link>
        </div>
      </div>
    </>
  );
}
