import { FC } from "react";
import { Button } from "./Button";

export type HeroContentType = {
  bgImage: string;
  title: string;
  subTitle?: string;
  link?: string;
  color: "white" | "black";
  buttonList: buttonListType[];
};

type buttonListType = {
  title: string;
  variants: "black" | "white" | "outline";
};

const HeroContent: FC<HeroContentType> = ({
  bgImage,
  title,
  subTitle,
  link,
  color,
  buttonList,
}) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`flex flex-col items-center justify-between py-[4%] w-full h-screen bg-no-repeat`}
    >
      <div className={`flex flex-col items-center gap-2 ${"text-" + color}`}>
        <h1 className="text-4xl font-semibold">{title}</h1>
        <h3 className={`text-xs ${link ? "underline" : ""}`}>{subTitle}</h3>
        {/* <h3 className="text-xs">After Federal Tax Credit</h3> */}
      </div>
      <div
        className={`flex flex-col sm:flex-row justify-center gap-3 px-4 w-full ${
          "text-" + color
        }`}
      >
        {buttonList.map((button) => (
          <Button variant={button.variants}>{button.title}</Button>
        ))}
      </div>
    </section>
  );
};

export default HeroContent;
