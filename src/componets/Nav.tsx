import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  return (
    <nav className="flex flex-row-reverse gap-1 bg-stone-900 opacity-80">
      <Link className="btn" to="/">
        Home
      </Link>
      <Link className="btn" to="/about">
        About
      </Link>
      <Link className="btn" to="/projects">
        Projects
      </Link>
      <ThemeToggle />
    </nav>
  );
};
