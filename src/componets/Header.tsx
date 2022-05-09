import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header>
      <div className="fixed top-0 h-1 w-full bg-gradient-to-r from-red-500 via-blue-600 to-purple-700"></div>
      <div className="fixed top-1 mb-10 flex w-full items-center justify-between border-b border-neutral-300 bg-neutral-100/80 py-3 px-10 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-900/80">
        <a href="/">
          <h1 className="m-2 justify-self-start p-0 text-4xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100">
            mg.
          </h1>
        </a>
        <Nav />
      </div>
    </header>
  );
};
