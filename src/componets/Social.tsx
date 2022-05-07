import { GithubSvg, LinkedinSvg, TwitterSvg } from "./iconSVG";

export const Social = () => {
  return (
    <div className="">
      <TwitterSvg />
      <GithubSvg />
      <LinkedinSvg />
      <a
        className="mb-4 border-neutral-700 border px-4 py-2 rounded-full bg-neutral-800 font-bold hover:bg-neutral-700 text-neutral-100"
        href="mailto:%69%61%6D%40%6D%61%74%74%67%72%61%68%2E%61%6D?subject=Message from www.mattgrah.am"
        target="_blank"
        rel="noopener noreferrer"
      >
        emailMe
      </a>
    </div>
  );
};
