import { Featured } from "./Featured";
import { Social } from "./Social";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="text-7xl font-black leading-relaxed text-neutral-800 dark:text-neutral-200">
        Hi, I am{" "}
        <span className=" underline decoration-red-500">Matt Graham.</span>
      </h1>
      <h2 className="mt-4 text-5xl font-bold leading-tight text-neutral-800 dark:text-neutral-200">
        Software Developer, Career Switcher,{" "}
        <span className="underline decoration-purple-700">Problem Solver,</span>{" "}
        Passion Chaser!
      </h2>
      <p className="mt-8 text-lg leading-relaxed tracking-wider text-neutral-800 dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit
        dolorem, eligendi numquam, ad facilis vitae quas sit at dignissimos
        aliquid iusto. Eaque odit rerum rem culpa velit fugiat tempore. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Porro impedit
        dolorem, eligendi numquam, ad facilis vitae quas sit at dignissimos
        aliquid iusto. Eaque odit rerum rem culpa velit fugiat tempore.
      </p>
      <p className="mt-8 text-lg leading-relaxed tracking-wider text-neutral-800 dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit
        dolorem, eligendi numquam, ad facilis vitae quas sit at dignissimos
        aliquid iusto. Eaque odit rerum rem culpa velit fugiat tempore. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Porro impedit
        dolorem, eligendi numquam, ad facilis vitae quas sit at dignissimos
        aliquid iusto. Eaque odit rerum rem culpa velit fugiat tempore.
      </p>

      <Social />
      <Featured />
    </div>
  );
};
