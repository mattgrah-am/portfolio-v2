import { MailSvg } from "./iconSVG";

export const EmailBtn = () => {
  return (
    <a
      className="linkbtn ml-10"
      href="mailto:%69%61%6D%40%6D%61%74%74%67%72%61%68%2E%61%6D?subject=Message from mattgrah.am website"
      target="_blank"
      rel="noopener noreferrer"
    >
      Email <MailSvg />
    </a>
  );
};
