import { useContext } from "react";
import { DarkSvg, LightSvg } from "./iconSVG";
import { ThemeContext, ThemeContextTypes } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextTypes>(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer rounded-full p-2 text-lg text-stone-900 shadow-none outline-none ring-transparent focus:outline-none dark:text-stone-100"
        >
          <LightSvg />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer rounded-full p-2 text-lg text-stone-900 shadow-none outline-none ring-transparent focus:outline-none dark:text-stone-100"
        >
          <DarkSvg />
        </button>
      )}
    </div>
  );
};
