import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  return (
    <nav className="flex gap-2 ">
      <NavLink
        className={(navData) => "btn" + (navData.isActive ? " active-btn" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(navData) => "btn" + (navData.isActive ? " active-btn" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={(navData) => "btn" + (navData.isActive ? " active-btn" : "")}
        to="/projects"
      >
        Projects
      </NavLink>
      <ThemeToggle />
    </nav>
  );
};
