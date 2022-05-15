import { LinkSvg } from "./iconSVG";
import iknowthatsong200x200 from "./img/iknowthatsong-200x200.webp";
import iknowthatsong600x300 from "./img/iknowthatsong-600x300.webp";
import akaizakaya200x200 from "./img/aka-izakaya-200x200.webp";
import akaizakaya600x300 from "./img/aka-izakaya-600x300.webp";
import jobapptrack200x200 from "./img/jobapptrack-200x200.webp";
import jobapptrack600x300 from "./img/jobapptrack-600x300.webp";
import tictactoe200x200 from "./img/tictactoe-200x200.webp";
import tictactoe600x300 from "./img/tictactoe-600x300.webp";
import tailwindCss200x200 from "./img/tailwindcss-200x200.webp";
import tailwindCss600x300 from "./img/tailwindcss-600x300.webp";

interface Projects {
  title: string;
  github: string;
  link: string;
  id: string;
  thumb: string;
  image: string;
  desc: string;
}

const projects: Projects[] = [
  {
    title: "I know that song!",
    github: "https://github.com/mattgrah-am/I-know-that-song",
    link: "https://iknowthatsong.mattgrah.am",
    id: "iknowthatsong",
    thumb: iknowthatsong200x200,
    image: iknowthatsong600x300,
    desc: "A simple web app that allows the end user to search for an artist or band, which in turn, plays a short 30sec music clip. The end user is then given multiple choice options to guess the title of the song that is playing. If the end user guesses correctly, the name of the song is highlighted green. However, if the end user chooses incorrectly, the selected guess is highlighted in red. At the end, the web app will tell the end user their results.",
  },
  {
    title: "Aka-Izakaya",
    github: "https://github.com/mattgrah-am/aka-izakaya",
    link: "https://aka-izakaya.herokuapp.com",
    id: "akaizakaya",
    thumb: akaizakaya200x200,
    image: akaizakaya600x300,
    desc: "A Japanese Resturant website that has the ability to show customers the food and drinks menu. This website also has an admin portal that gives the client the ability to 'CRUD' the menu items.",
  },
  {
    title: "Job App Track",
    github: "https://github.com/mattgrah-am/jobapptrack",
    link: "https://floating-forest-21500.herokuapp.com/",
    id: "jobapptrack",
    thumb: jobapptrack200x200,
    image: jobapptrack600x300,
    desc: "This full stack web app is a job application tracker that can be used to track jobs that the user has applied for. It also has the ability to add further information or edit existing information to track the progress of the application.",
  },
  {
    title: "Tic Tac Toe",
    github: "https://github.com/mattgrah-am/tictactoe",
    link: "https://mattgrah-am.github.io/tictactoe/",
    id: "tictactoe",
    thumb: tictactoe200x200,
    image: tictactoe600x300,
    desc: "A simple Tic Tac Toe game that uses HTML, CSS, & JavaScript.",
  },
  {
    title: "Tailwind Theme",
    github: "https://github.com/mattgrah-am/tailwind_theme",
    link: "https://mattgrah-am.github.io/tailwind_theme/",
    id: "tailwindtheme",
    thumb: tailwindCss200x200,
    image: tailwindCss600x300,
    desc: "A simple Tailwind theme that was created while learning Tailwind CSS.",
  },
];
export const ProjectTiles = () => {
  return (
    <div className="mb-16 flex flex-wrap justify-center gap-2 sm:gap-4">
      {projects.map((project, index: number) => (
        <a key={index} href={"#" + project.id}>
          <div className="mt-2 mb-0 flex w-36 flex-col gap-2 rounded border border-neutral-400 bg-neutral-300 p-2 text-neutral-900 hover:bg-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100  dark:hover:bg-neutral-700 sm:w-40">
            <img
              className="rounded border border-neutral-400 dark:border-neutral-700"
              src={project.thumb}
              alt=""
            />
            <p className="text-center text-xs font-bold uppercase text-neutral-800 dark:text-neutral-200 sm:text-sm">
              {project.title}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export const ProjectItem = () => {
  return (
    <>
      {projects.map((project, index: number) => (
        <div key={index} className="mt-10 md:mt-16" id={project.id}>
          <img
            src={project.image}
            alt=""
            className="w-full rounded border border-neutral-400 dark:border-neutral-700"
          />
          <h3 className="mt-4 text-4xl font-bold md:mt-6">{project.title}</h3>
          <p className="about-p m-auto">{project.desc}</p>
          <div className="mt-2 mb-10 flex gap-4 md:mb-16 md:mt-4">
            <a
              className="linkbtn"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link <LinkSvg />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="linkbtn"
            >
              Code <LinkSvg />
            </a>
          </div>
          {index <= projects.length - 2 && (
            <hr className="border-neutral-300 dark:border-neutral-700" />
          )}
        </div>
      ))}
    </>
  );
};

export const FeaturedItems = () => {
  return (
    <>
      {projects.map(
        (project, index: number) =>
          index < 3 && (
            <a key={index} href={"/projects/#" + project.id}>
              <div className="my-6 flex flex-col items-center gap-4 rounded border border-neutral-400 bg-neutral-300 p-4 text-neutral-900 hover:bg-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100  dark:hover:bg-neutral-700  sm:flex-row sm:items-start sm:text-left">
                <img
                  className="h-40 w-40 rounded border border-neutral-400 dark:border-neutral-700"
                  src={project.thumb}
                  alt=""
                />
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base leading-normal tracking-wider">
                    {project.desc}
                  </p>
                </div>
              </div>
            </a>
          )
      )}
    </>
  );
};
