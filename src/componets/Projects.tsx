import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <div className="container">
      <h2 className="text-5xl font-bold">Projects</h2>
      <p className="about-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio
        consequatur non odit blanditiis deserunt, exercitationem dolorum libero
        asperiores sit modi voluptatibus explicabo. Doloribus amet velit quam
        sed, dicta vero!
      </p>
      <div className="flex gap-4">
        <div className="my-6 flex w-52 flex-col gap-4 rounded border border-neutral-400 bg-neutral-300 p-2 dark:border-neutral-700 dark:bg-neutral-800">
          <img
            className="rounded border border-neutral-400 dark:border-neutral-700"
            src="https://dummyimage.com/200x200/cccccc/ffffff"
            alt=""
          />
          <p className="text-normal text-center font-bold text-neutral-800 dark:text-neutral-200">
            Project Title
          </p>
        </div>
      </div>
      <div className="hr mt-8"></div>
      <ProjectItem />
    </div>
  );
};
