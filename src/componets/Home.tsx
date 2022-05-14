import { Link } from "react-router-dom";
import { Featured } from "./Featured";
import { Social } from "./Social";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="text-5xl font-black leading-normal text-neutral-800 dark:text-neutral-200 sm:text-7xl sm:leading-relaxed">
        Hi, I am{" "}
        <span className=" underline decoration-red-500">Matt Graham.</span>
      </h1>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-5xl">
        Software developer, career switcher,{" "}
        <span className="underline decoration-blue-600">problem solver,</span> &
        ambition seeker.
      </h2>
      <p className="about-p">
        I am a Melbourne (AU) based software developer, who has recently
        completed{" "}
        <a
          href="https://generalassemb.ly/education/software-engineering-immersive-remote-flex"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-purple-700 decoration-2 hover:no-underline"
        >
          General Assembly's Software Engineering Immersive Online (Flex)
          program
        </a>
        . I am also currently in the process of changing careers from Facilities
        Management to the Tech industry, as I am pursuing a career that I am
        extremely passionate about. As quoted by Marc Anthony;
        <p className="mt-8 ml-4 font-light italic sm:ml-16">
          “If you do what you love, you'll never work a day in your life.”
        </p>
      </p>
      <p className="about-p">
        Although I am relatively new to the Tech industry, I offer an extensive
        array of soft skills, such as problem solving, leadership, mentoring,
        team building, project management and presenting. The story doesn't end
        here;{" "}
        <Link
          to="/about"
          className="underline decoration-red-500 decoration-2 hover:no-underline"
        >
          find out more
        </Link>
        .
      </p>

      <Social />
      <Featured />
    </div>
  );
};
