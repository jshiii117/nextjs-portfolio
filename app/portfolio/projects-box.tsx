import { ArrowIcon } from 'components/icons';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface IndividualPortfolioProjectProps {
  project: Record<string, any>;
}

export function IndividualPortfolioProject({
  project,
}: IndividualPortfolioProjectProps) {
  return (
    <>
      <div className='my-6 border border-gray-300 dark:border-gray-600 px-4 rounded-lg bg-gradient-to-r from-purple-400/40 to-pink-500/40 hover:from-purple-400/50 hover:to-pink-500/50 transition-all duration-500 ease-in-out'>
        <h2 className='font-bold text-base mt-5'>{project.title}</h2>
        <ReactMarkdown
          className='my-4 text-sm'
          children={project.description}
        />
        <div className='flex items-center justify-start space-x-4'>
          {project.techLogos.map((techLogo, index) => (
            <div key={index}>{techLogo}</div>
          ))}
        </div>
        <div className='flex space-x-4 items-center'>
          {project.repoLink == '' ? null : (
            <Link
              className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all no-underline'
              href={project.repoLink}
            >
              <ArrowIcon />
              <p className='h-7 underline decoration-current'>Repo</p>
            </Link>
          )}
          <Link
            className='flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all no-underline'
            href={project.demoLink}
          >
            <ArrowIcon />
            <p className='h-7 underline decoration-current'>Demo</p>
          </Link>
        </div>
      </div>
    </>
  );
}
