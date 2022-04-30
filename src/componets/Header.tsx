import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 px-10 mb-10 border-b border-neutral-700 w-full fixed top-0 backdrop-blur-lg bg-neutral-200/80 dark:bg-neutral-900/80">
      <h1 className="justify-self-start font-bold text-4xl tracking-tighter m-2 p-0 text-neutral-900 dark:text-neutral-100">
        mg.
      </h1>
      <Nav />
    </header>
  );
};
