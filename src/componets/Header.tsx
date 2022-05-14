import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header>
      <div className="fixed top-0 h-1 w-full bg-gradient-to-r from-red-500 via-blue-600 to-purple-700"></div>
      <div className="fixed top-1 mb-10 w-full border-b border-neutral-300 bg-neutral-100/80 py-3 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-900/80 ">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-2 sm:px-0 ">
          <a href="/">
            <h1 className="my-2 p-0 text-4xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100">
              mg.
            </h1>
          </a>
          <Nav />
        </div>
      </div>
    </header>
  );
};
