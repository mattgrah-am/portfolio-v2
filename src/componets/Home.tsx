import { Link } from "react-router-dom";
import { Featured } from "./Featured";
import { Social } from "./Social";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="text-7xl font-black leading-relaxed text-neutral-800 dark:text-neutral-200">
        Hi, I am{" "}
        <span className=" underline decoration-red-500">Matt Graham.</span>
      </h1>
      <h2 className="mt-4 text-5xl font-bold leading-tight text-neutral-800 dark:text-neutral-200">
        Software Developer, Career Switcher,{" "}
        <span className="underline decoration-blue-600">Problem Solver,</span>{" "}
        Passion Seeker!
      </h2>
      <p className="about-p">
        I am Melbourne (AU) based software developer, whom has recently
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
        Management to the Tech industry as I am pursuing a career in a field
        that I am extremely passionate about. As quoted by Marc Anthony;
        <p className="mt-8 ml-16 font-light italic">
          “If you do what you love, you'll never work a day in your life.”
        </p>
      </p>
      <p className="about-p">
        Although I am relatively new to the Tech industry, I bring a wealth of
        experience in a range of soft skills, including problem solving,
        leadership, mentoring, team building, project management, presentations
        and much more. This story doesn't end here,{" "}
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
