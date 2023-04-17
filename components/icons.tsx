import Image from "next/image";

export function GmailIcon() {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg
      className="mr-2"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      color="white"
    >
      <path
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg
      className="mr-2"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ReactIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function NextIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function TailwindIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function TypescriptIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function JavascriptIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function MuiIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function PythonIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function FirebaseIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function MongoDbIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function FigmaIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function FlaskIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function NodeJsIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function FlutterIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function DartIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function AndroidStudioIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function AwsIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function UnityIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}

export function CSharpIcon() {
  return (
    <Image
      src={
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
      }
      alt={`Logo`}
      width={25}
      height={25}
    />
  );
}
