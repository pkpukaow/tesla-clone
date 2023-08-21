import HeroContent, { HeroContentType } from "@components/HeroContent";

const pageContent: HeroContentType[] = [
  {
    bgImage:
      "https://www.tesla.com/sites/default/files/images/features/section-hero-carnival@2x.jpg?2090825989",
    title: "Experience Tesla",
    subTitle: "Schedule a Demo Drive Today",
    color: "white",
    buttonList: [
      {
        title: "Demo Drive",
        variants: "outline",
      },
    ],
  },
  {
    bgImage:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg",
    title: "Model 3",
    subTitle: "Starting at $32,740",
    color: "black",
    buttonList: [
      {
        title: "Explore Inventory",
        variants: "white",
      },
      {
        title: "Custom Order",
        variants: "black",
      },
    ],
  },
  {
    bgImage:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop",
    title: "Model Y",
    subTitle: "Starting at $32,740",
    color: "black",
    buttonList: [
      {
        title: "Explore Inventory",
        variants: "white",
      },
      {
        title: "Custom Order",
        variants: "black",
      },
    ],
  },
  {
    bgImage:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg",
    title: "Model S",
    subTitle: "Starting at $32,740",
    color: "black",
    buttonList: [
      {
        title: "Explore Inventory",
        variants: "white",
      },
      {
        title: "Custom Order",
        variants: "black",
      },
    ],
  },
  {
    bgImage:
      "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD",
    title: "Model X",
    subTitle: "Starting at $32,740",
    color: "black",
    buttonList: [
      {
        title: "Explore Inventory",
        variants: "white",
      },
      {
        title: "Custom Order",
        variants: "black",
      },
    ],
  },
];

const HomePage = () => {
  return (
    <>
      {pageContent.map((page) => {
        return (
          <HeroContent
            key={page.title}
            bgImage={page.bgImage}
            title={page.title}
            subTitle={page.subTitle}
            color={page.color}
            link={page.link}
            buttonList={page.buttonList}
          />
        );
      })}
    </>
  );
};

export default HomePage;
