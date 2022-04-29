import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="flex justify-between py-6 px-10 border-b border-neutral-800 mb-10">
      <h1 className="justify-self-start font-bold text-4xl tracking-tighter m-2 p-0">
        mg.
      </h1>
      <Nav />
    </header>
  );
};
