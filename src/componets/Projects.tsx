import { ProjectItem, ProjectTiles } from "./ProjectItems";

export const Projects = () => {
  return (
    <div className="fade-transition container">
      <h2 className="text-5xl font-bold">Projects</h2>
      <p className="about-p">
        Starting with a simple Tic Tac Toe game, to a Job Application Tracker,
        evolving to a complex music guessing game using Spotify's API, this is a
        collection of projects I have completed whilst on my journey as a
        Software Developer.
      </p>
      <ProjectTiles />
      <div className="hr mt-8"></div>
      <ProjectItem />
    </div>
  );
};
