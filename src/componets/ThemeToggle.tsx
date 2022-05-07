import { useContext } from "react";
import { DarkSvg, LightSvg } from "./iconSVG";
import { ThemeContext } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext<any>(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-stone-900 dark:text-stone-100 shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <LightSvg />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-stone-900 dark:text-stone-100 focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <DarkSvg />
        </button>
      )}
    </div>
  );
};
