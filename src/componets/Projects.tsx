import { ProjectItem, ProjectTiles } from "./ProjectItems";

export const Projects = () => {
  return (
    <div className="container">
      <h2 className="text-5xl font-bold">Projects</h2>
      <p className="about-p">
        Starting with a simple Tic Tac Toe game, to a Job Application Tracker,
        to a complex music guessing game using Spotify's API. This is a
        collection of projects I have completed whilst on my journey as a
        Software developer.
      </p>
      <ProjectTiles />
      <div className="hr mt-8"></div>
      <ProjectItem />
    </div>
  );
};
