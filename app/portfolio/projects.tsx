import {
  AndroidStudioIcon,
  AwsIcon,
  CSharpIcon,
  DartIcon,
  FigmaIcon,
  FirebaseIcon,
  FlaskIcon,
  FlutterIcon,
  JavascriptIcon,
  MongoDbIcon,
  MuiIcon,
  NextIcon,
  NodeJsIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  UnityIcon,
} from 'components/icons';

interface Project {
  title: string;
  description: string;
  techLogos: React.ReactNode[];
  repoLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    title: 'UncleGPT (YC W24)',
    description: `
An AI project-management tool. Helps automate away the small tasks so you can focus on your project vision.`,
    techLogos: [],
    repoLink: '',
    demoLink: 'https://unclegpt.app',
  },
  {
    title: '[WIP] UBCMA Job Board',
    description: `
Building a job board for the **300+ members** at UBC's Marketing Association.

I am focusing on the backend, creating a suite of webscrapers to collect job postings, and utilizing **Python, Django, Celery, Redis, and pandas** to build a webserver to handle batch processing and storage jobs.`,
    techLogos: [],
    repoLink: '',
    demoLink: 'https://ubcma.ca',
  },
  {
    title: 'AutoUPass 🚗',
    description: `
Self-serve web application that helped renew **500+** transit passes for university students across the province.

I learned how to create webservers, webscrape, and implemented asymmetric encryption to store sensitive data.

Built using T3 Stack (**Typescript, TailwindCSS, Next.js, tRPC**), **PrismaDB**, and **PlanetScale MySQL**. Deployed using **Vercel**.`,
    techLogos: [],
    repoLink: '',
    demoLink: 'https://autoupass-t3.vercel.app',
  },
  {
    title: 'Commerce Mentorship Program 📈',
    description: `
Website for the Commerce Mentorship Program, a student-run organization at the University of British Columbia.

A weekend project that I built, now used by **thousands of students per month** to access study materials using the Review Package Explorer.`,
    techLogos: [],
    repoLink: '',
    demoLink: 'https://ubccmp.com',
  },
  {
    title: 'Chat Through History',
    description: `
Hackathon submission for SFU's StormHacks 2023. **Won Honourable Mention**.

An AI chatbot powered by **GPT-3 and D-ID's AI facial expression API** that brings cartoon versions of Elon Musk, Opera Winfrey, and other cool figures to life`,
    techLogos: [],
    repoLink: '',
    demoLink:
      'https://devpost.com/software/chat-through-history?ref_content=my-projects-tab&ref_feature=my_projects',
  },
  {
    title: 'Jiamei Overseas Website 💻🙆',
    description: `
Designed and developed a new company website for an immigration consulting firm using **Next.js 13 and ChakraUI**.

Being my biggest web-dev project to date, I challenged myself to learn a lot of new concepts such as mobile-first design, web optimization, and many of Next 13's features.`,
    techLogos: [<NextIcon />],
    repoLink: '',
    demoLink: 'https://jiamei-overseas.vercel.app/',
  },
  {
    title: 'NextJS Portfolio Website 💻🙆‍♂️✨',
    description:
      'Portfolio website made using React, Next.js 13, and TailwindCSS.',
    techLogos: [
      <TypescriptIcon />,
      <ReactIcon />,
      <NextIcon />,
      <TailwindIcon />,
    ],
    repoLink: 'https://github.com/jshiii117/nextjs-portfolio',
    demoLink: 'https://oasismassagesaanich.ca/',
  },
  {
    title: 'Oasis Massage Saanich 💆‍♀️',
    description:
      'A responsive, static website made for a local business using Material UI and deployed using Firebase.',
    techLogos: [<JavascriptIcon />, <ReactIcon />, <MuiIcon />, <FigmaIcon />],
    repoLink: 'https://github.com/jshiii117/oasis-massage-saanich',
    demoLink: 'https://oasismassagesaanich.ca/',
  },
  {
    title: 'DailyBoost 👟',
    description:
      "It's like BeReal for exercising - submission for the 2023 UBC BizTech x EY Produthon. I developed the recording and upload functionality to Firebase RTD, as well as storing user information using MongoDB Cloud.",
    techLogos: [
      <JavascriptIcon />,
      <ReactIcon />,
      <NodeJsIcon />,
      <FirebaseIcon />,
      <MongoDbIcon />,
    ],
    repoLink: 'https://github.com/myung03/produHacks',
    demoLink: 'https://devpost.com/software/dailyboost-js5vxm',
  },
  {
    title: 'Interview.Me 👓',
    description:
      "Submission for the 2022 LabLabAI Open AI Hackathon. Using OpenAI GPT-3 and Whisper APIs, we built a virtual interviewer who can provide customized behavioural questions based on an applicant's specified company and role. Recorded 2,300 site visits and roughly 9,000 prompts submitted",
    techLogos: [
      <JavascriptIcon />,
      <PythonIcon />,
      <ReactIcon />,
      <MuiIcon />,
      <FlaskIcon />,
    ],
    repoLink: 'https://github.com/jshiii117/Interview.Me',
    demoLink: 'https://www.youtube.com/watch?v=snYQF07WZMo&ab_channel=JamesShi',
  },
  {
    title: 'Insighteur V1.1.0+ 📱',
    description:
      'Overhauled the UI of the Insighteur app. I also helped ship new core functionalities of the Flutter application including a new page routing and navigation feature and a caching mechanism to cut 50% of querying cost.',
    techLogos: [
      <DartIcon />,
      <FlutterIcon />,
      <AwsIcon />,
      <AndroidStudioIcon />,
    ],
    repoLink: 'https://apps.apple.com/ca/app/insighteur/id1614686665',
    demoLink: 'https://apps.apple.com/ca/app/insighteur/id1614686665',
  },

  {
    title: 'Timeline Tactics 🕹️',
    description: `
My first coding project that pushed me into software dev! Timeline Tactics is a 2D, turn-based multiplayer game made with friends.

I developed the battle mechanism and multiplayer functionalities built with Mirror networking library. I also designed the pixel characters using Aseprite!`,
    techLogos: [<CSharpIcon />, <UnityIcon />],
    repoLink: 'https://github.com/jshiii117/timeline-tactics',
    demoLink: 'https://timelinetactics.wordpress.com/',
  },
];

export { projects };
