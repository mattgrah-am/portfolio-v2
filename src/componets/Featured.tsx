import { Link } from "react-router-dom";

export const Featured = () => {
  return (
    <>
      <div className="hr mt-16"></div>
      <Link to="/projects">
        <h2 className="mt-16 text-4xl font-bold underline decoration-blue-600">
          Featured Projects
        </h2>
      </Link>
      <p className="mt-2 text-lg leading-normal tracking-wider text-neutral-800 dark:text-neutral-300">
        A collection of projects that I have completed.
      </p>
      <div className="my-6 flex gap-4 rounded border border-neutral-400 bg-neutral-300 p-4 dark:border-neutral-700 dark:bg-neutral-800">
        <img
          className="rounded border border-neutral-400 dark:border-neutral-700"
          src="https://dummyimage.com/200x200/cccccc/ffffff"
          alt=""
        />
        <div>
          <h3 className="text-3xl font-bold leading-tight text-neutral-800 dark:text-neutral-200">
            Featured Project Title
          </h3>
          <p className="mt-2 text-lg leading-normal tracking-wider text-neutral-700 dark:text-neutral-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            vero ex id quasi ea repudiandae ut repellendus ipsum cum excepturi
            beatae, possimus necessitatibus rem aspernatur nemo sint? Deserunt,
            sapiente sequi.
          </p>
        </div>
      </div>
    </>
  );
};
