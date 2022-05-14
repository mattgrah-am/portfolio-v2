import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  return (
    <nav className="flex items-center gap-2 sm:gap-4 ">
      <NavLink
        className={(navData) => "btn" + (navData.isActive ? " active-btn" : "")}
        to="/"
      >
        home
      </NavLink>
      <NavLink
        className={(navData) => "btn" + (navData.isActive ? " active-btn" : "")}
        to="/about"
      >
        about
      </NavLink>
      <NavLink
        className={(navData) => "btn" + (navData.isActive ? " active-btn" : "")}
        to="/projects"
      >
        projects
      </NavLink>
      <ThemeToggle />
    </nav>
  );
};
