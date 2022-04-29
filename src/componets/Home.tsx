import { Featured } from "./Featured";
import { Social } from "./Social";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="">Hello and Welcome</h1>
      <p>Paragraph One</p>
      <p>Paragraph Two</p>
      <Social />
      <Featured />
    </div>
  );
};
