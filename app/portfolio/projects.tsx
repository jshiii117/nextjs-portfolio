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
} from "components/icons";

interface Project {
  title: string;
  description: string;
  techLogos: React.ReactNode[];
  repoLink: string;
  demoLink: string;
}

const projects: Project[] = [
  {
    title: "[WIP] Jiamei Overseas Website 💻🙆",
    description:
      "Designed and developed a new company website for an immigration consulting firm using Next.js 13 and ChakraUI. Being my biggest web-dev project to date, I challenged myself to learn a lot of new concepts such as mobile-first design, web optimization, and many of Next 13's features that I previously did not have a chance to play with",
    techLogos: [<NextIcon />],
    repoLink: "",
    demoLink: "https://jiamei-overseas-jshiii117.vercel.app/",
  },
  {
    title: "NextJS Portfolio Website 💻🙆‍♂️✨",
    description:
      "Built a personal portfolio website using React, Next.js 13, and TailwindCSS.",
    techLogos: [
      <TypescriptIcon />,
      <ReactIcon />,
      <NextIcon />,
      <TailwindIcon />,
    ],
    repoLink: "https://github.com/jshiii117/nextjs-portfolio",
    demoLink: "https://oasismassagesaanich.ca/",
  },
  {
    title: "Oasis Massage Saanich 💆‍♀️",
    description:
      "A responsive, static website made for a local business using Material UI and deployed using Firebase.",
    techLogos: [<JavascriptIcon />, <ReactIcon />, <MuiIcon />, <FigmaIcon />],
    repoLink: "https://github.com/jshiii117/oasis-massage-saanich",
    demoLink: "https://oasismassagesaanich.ca/",
  },
  {
    title: "DailyBoost 👟",
    description:
      "It's like BeReal for exercising - submission for the 2023 UBC BizTech x EY Produthon. I developed the recording and upload functionality to Firebase RTD, as well as storing user information using MongoDB Cloud.",
    techLogos: [
      <JavascriptIcon />,
      <ReactIcon />,
      <NodeJsIcon />,
      <FirebaseIcon />,
      <MongoDbIcon />,
    ],
    repoLink: "https://github.com/myung03/produHacks",
    demoLink: "https://devpost.com/software/dailyboost-js5vxm",
  },
  {
    title: "Interview.Me 👓",
    description:
      "Submission for the 2022 LabLabAI Open AI Hackathon. Using OpenAI GPT-3 and Whisper APIs, we built a virtual interviewer who can provide customized behavioural questions based on an applicant's specified company and role. Recorded 2,300 site visits and roughly 9,000 prompts submitted",
    techLogos: [
      <JavascriptIcon />,
      <PythonIcon />,
      <ReactIcon />,
      <MuiIcon />,
      <FlaskIcon />,
    ],
    repoLink: "https://github.com/jshiii117/Interview.Me",
    demoLink: "https://www.youtube.com/watch?v=snYQF07WZMo&ab_channel=JamesShi",
  },
  {
    title: "Insighteur V1.1.0+ 📱",
    description:
      "Overhauled the UI of the Insighteur app. I also helped ship new core functionalities of the Flutter application including a new page routing and navigation feature and a caching mechanism to cut 50% of querying cost.",
    techLogos: [
      <DartIcon />,
      <FlutterIcon />,
      <AwsIcon />,
      <AndroidStudioIcon />,
    ],
    repoLink: "https://apps.apple.com/ca/app/insighteur/id1614686665",
    demoLink: "https://apps.apple.com/ca/app/insighteur/id1614686665",
  },

  {
    title: "Timeline Tactics 🕹️",
    description:
      "My first coding project that pushed me into software dev! Timeline Tactics is a 2D, turn-based multiplayer game made with friends. I developed the battle mechanism and multiplayer functionalities built with Mirror networking library. I also designed the pixel characters using Aseprite!",
    techLogos: [<CSharpIcon />, <UnityIcon />],
    repoLink: "https://github.com/jshiii117/timeline-tactics",
    demoLink: "https://timelinetactics.wordpress.com/",
  },
];

export { projects };
