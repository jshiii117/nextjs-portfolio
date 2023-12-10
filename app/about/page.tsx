import {
  LinkedinIcon,
  GitHubIcon,
  ArrowIcon,
  GmailIcon,
} from 'components/icons';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section>
      <h1 className='font-bold text-3xl font-serif'>About Me</h1>

      <div className='prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200'>
        <p className='my-5 text-neutral-800 dark:text-neutral-200'>
          My development journey began in September 2021, the same time I
          enrolled at UBC, initially as a Bachelor of Commerce student
        </p>
        <p>
          As a primarily self-taught developer, I've taken a{' '}
          <b>project-focused approach to learning</b>, which has helped improve
          my resourcefulness and efficiency
        </p>
        <p>
          <Link
            href={'/portfolio'}
            className='text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text'
          >
            Through my projects
          </Link>
          , I've explored various areas of development, full-stack with
          Typescript/Javascript, data analysis with Python, mobile dev with
          React Native/Flutter SDK, and game dev with Unity and C#.
        </p>
        <p>My goals for 2023:</p>
        <ol>
          <li className='line-through'>Take more pictures</li>
          <li>Deadlift 600lbs</li>
          <li className='line-through'>Finally dunk a basketball</li>
          <li className='line-through'>Work on my mandarin</li>
          <li className='line-through'>Build websites for 10 companies</li>
        </ol>
        <div className='flex flex-col gap-2 md:flex-row md:gap-2'>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='mailto:jamesshi117@gmail.com'
            className='flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between'
          >
            <div className='flex items-center'>
              <GmailIcon />
              <div className='ml-3'>Gmail</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/jshiii117'
            className='flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between'
          >
            <div className='flex items-center'>
              <GitHubIcon />
              <div className='ml-3'>GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://linkedin.com/in/jamesshi117/'
            className='flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between'
          >
            <div className='flex items-center'>
              <LinkedinIcon />
              <div className='ml-3'>LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
