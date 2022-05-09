import { LinkSvg } from "./iconSVG";

export const ProjectItem = (props: any) => {
  return (
    <div className="mt-8">
      <h3 id="" className="text-4xl font-bold">
        Project Title
      </h3>
      <img
        src="https://dummyimage.com/600x200/cccccc/ffffff"
        alt=""
        className="mt-4 w-full rounded border border-neutral-400 dark:border-neutral-700"
      />
      <p className="about-p m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste
        odit commodi ipsum autem adipisci vel aliquid accusamus, optio laborum
        aut aliquam odio dolore esse expedita eius delectus maxime quis!
        <div className=" mt-4 flex gap-4">
          <a
            className="btn flex justify-start gap-1 border border-neutral-700"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link Name <LinkSvg />
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex justify-start gap-1 border border-neutral-700"
          >
            Github <LinkSvg />
          </a>
        </div>
      </p>
    </div>
  );
};
