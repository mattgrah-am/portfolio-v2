export const About = () => {
  return (
    <div className="container">
      <img
        src="https://dummyimage.com/600x300/cccccc/ffffff"
        alt=""
        className="w-full rounded border border-neutral-400 dark:border-neutral-700"
      />
      <p className="about-p">
        I am Matt Graham, a Melbourne (AU) based software developer, whom has
        recently completed{" "}
        <a
          href="https://generalassemb.ly/education/software-engineering-immersive-remote-flex"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-purple-700 decoration-2 hover:no-underline"
        >
          General Assembly's Software Engineering Immersive Online (Flex)
          program
        </a>
        . I am also currently in the process of changing careers from Facilities
        Management to the Tech industry as I am pursuing a career in a field
        that I am extremely passionate about. As quoted by Marc Anthony;
        <p className="mt-8 ml-16 font-light italic">
          “If you do what you love, you'll never work a day in your life.”
        </p>
      </p>
      <p className="about-p">
        Although I am relatively new to the Tech industry, I bring a wealth of
        experience in a range of soft skills, including problem solving,
        leadership, mentoring, team building, project management, presentations
        and much more.
      </p>
      <p className="about-p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor
        repellendus eum quos non veniam magnam facere est possimus adipisci
        mollitia fuga sunt, id amet ut, vel recusandae ipsum dolores.
      </p>
      <p className="about-p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolor
        repellendus eum quos non veniam magnam facere est possimus adipisci
        mollitia fuga sunt, id amet ut, vel recusandae ipsum dolores.
      </p>
      <div className="hr mt-8" />
      <h3 className="mt-8 text-2xl font-bold leading-tight">Work</h3>
      <p className="flex">
        <span className="">CBRE</span>
        <span className="">Building Services Engineer</span>
        <span className="">2019-Current</span>
      </p>
      <p className="flex">
        <span className="">Knight Frank</span>
        <span className="">Senior Facilities Manager</span>
        <span className="">2015-2019</span>
      </p>
      <p className="flex">
        <span className="">Knight Frank</span>
        <span className="">Facilities Manager</span>
        <span className="">2012-2015</span>
      </p>
      <div className="hr mt-8" />
      <h3 className="mt-8 text-2xl font-bold leading-tight">About this site</h3>
      <p className="about-p">In case you were interested, this site is:</p>
      <ul>
        <li>Created with VSCode</li>
        <li>Hosted on Github and Cloudflare</li>
        <li>Built using React JS, TypeScript and Tailwind CSS, </li>
      </ul>
    </div>
  );
};
