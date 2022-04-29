import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  return (
    <nav className="flex items-center gap-4 ">
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
        aboutMe
      </NavLink>
      <NavLink
        className={(navData) => "btn" + (navData.isActive ? " active-btn" : "")}
        to="/projects"
      >
        myWork
      </NavLink>
      <ThemeToggle />
    </nav>
  );
};
