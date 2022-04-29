import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="flex justify-between py-6 px-4 bg-neutral-900 opacity-80 border-b border-neutral-800 mb-10">
      <h1 className="text-neutral-100 font-bold py-1.5 px-3">MattGrah.am</h1>
      <Nav />
    </header>
  );
};
