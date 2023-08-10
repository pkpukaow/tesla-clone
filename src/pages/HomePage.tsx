import HeroContent, { HeroContentType } from "@components/HeroContent"



const pageContent: HeroContentType[] = [
    {
        bgImage: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4",
        title: "Experience Tesla",
        subTitle: "Schedule a Demo Drive Today",
        color: "white",
        buttonList: [
            {
                title: "Demo Drive",
                variants: "outline"
            }
        ]
    },
    {
        bgImage: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Mobile-NA.jpg",
        title: "Model 3",
        subTitle: "Starting at $32,740",
        color: "black",
        buttonList: [
            {
                title: "Explore Inventory",
                variants: "white"
            },
            {
                title: "Custom Order",
                variants: "black"
            },
        ]
    }
]

const HomePage = () => {
    return (
        <div>
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
                )
            })}
        </div>
    )
}

export default HomePage