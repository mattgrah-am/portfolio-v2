import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="flex gap-1">
      <Link className="btn" to="/">
        Home
      </Link>
      <Link className="btn" to="/about">
        About
      </Link>
      <Link className="btn" to="/projects">
        Projects
      </Link>
    </nav>
  );
};
