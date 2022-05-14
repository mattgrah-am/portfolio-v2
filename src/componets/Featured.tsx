import { Link } from "react-router-dom";
import { FeaturedItems } from "./ProjectItems";

export const Featured = () => {
  return (
    <>
      <div className="hr mt-16"></div>
      <Link to="/projects">
        <h2 className="mt-16 text-3xl font-bold underline decoration-blue-600 sm:text-4xl">
          Featured Projects
        </h2>
      </Link>
      <p className="mt-2 text-lg leading-normal tracking-wider text-neutral-800 dark:text-neutral-300">
        A collection of projects that I have completed.
      </p>
      <FeaturedItems />
    </>
  );
};
