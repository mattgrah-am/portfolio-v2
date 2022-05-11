import aboutimg from "./img/aboutimg.webp";

export const About = () => {
  return (
    <div className="container">
      <img
        src={aboutimg}
        alt=""
        className="float-right m-2 mt-8 w-2/5 rounded border border-neutral-400 dark:border-neutral-700"
      />
      <p className="text-lg leading-relaxed tracking-wider text-neutral-800 dark:text-neutral-200">
        I am Matt Graham, a Melbourne (AU) based software developer, whom has
        recently completed{" "}
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
        <p className="mt-8 font-light italic">
          “If you do what you love, you'll never work a day in your life.”
        </p>
      </p>
      <p className="about-p">
        Although I am relatively new to the Tech industry, I bring a wealth of
        experience in a range of soft skills, including problem solving,
        leadership, mentoring, team building, project management, presentations
        and much more.
      </p>
      <p className="about-p">
        I have always had a keen interest in technology since getting my first
        computer in my early teens. I tinkered with various Linux distributions
        and had a many hobby websites using Wordpress. The interest in web
        development never faded.
      </p>
      <p className="about-p">
        In the last few years, my perspective on careers, work / life balance
        has shifted and my focus is having a career where I can do something I
        love doing. Software Development is that love. If you want to find out
        more or reach out feel free to message me on{" "}
        <a
          href="https://twitter.com/mattgrah_am"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-red-500 decoration-2 hover:no-underline"
        >
          Twitter
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/mattgrah-am/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-blue-600 decoration-2 hover:no-underline"
        >
          LinkedIn
        </a>
        . You can also see my latest adventures (of code) by checking out my{" "}
        <a
          href="https://github.com/mattgrah-am"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-purple-700 decoration-2 hover:no-underline"
        >
          Github
        </a>
        .
      </p>
      <div className="hr mt-8" />
      <h3 className="mt-8 text-2xl font-bold leading-tight">About this site</h3>
      <p className="about-p">In case you were interested, this site is:</p>
      <ul className="mb-8 list-disc text-lg leading-relaxed tracking-wider text-neutral-800 dark:text-neutral-200">
        <li className="ml-8 mt-2">
          Created with{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            VSCode
          </a>
        </li>
        <li className="ml-8 mt-2">
          Hosted on{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://www.cloudflare.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Cloudflare
          </a>
        </li>
        <li className="ml-8 mt-2">
          Built using{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            React JS
          </a>
          ,{" "}
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            TypeScript
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Tailwind CSS
          </a>
        </li>
        <li className="ml-8 mt-2">
          Available to review on{" "}
          <a
            href="https://github.com/mattgrah-am/portfolio-v2"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};
