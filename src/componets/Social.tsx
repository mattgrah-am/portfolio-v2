import { EmailBtn } from "./EmailBtn";
import { GithubSvg, LinkedinSvg, TwitterSvg } from "./iconSVG";

export const Social = () => {
  return (
    <div className="mt-8 flex items-center gap-2">
      <TwitterSvg />
      <GithubSvg />
      <LinkedinSvg />
      <EmailBtn />
    </div>
  );
};
