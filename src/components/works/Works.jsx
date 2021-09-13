import { useState } from "react";
import "./works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, vel quas, nisi aspernatur in et reprehenderit quaerat minus laborum ipsa aliquid unde natus amet. Est voluptates iure tempore fuga fugit.",
            img: "https://500px.com/static/media/editors8@1x.126c6fb9.png"
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, vel quas, nisi aspernatur in et reprehenderit quaerat minus laborum ipsa aliquid unde natus amet. Est voluptates iure tempore fuga fugit.",
            img: "data:image/jpeg;base64,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"
        },
        {
            id: "3",
            icon: "./assets/writting.png",
            title: "Branding",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, vel quas, nisi aspernatur in et reprehenderit quaerat minus laborum ipsa aliquid unde natus amet. Est voluptates iure tempore fuga fugit.",
            img: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Grand_Prize_Tyler_Schiffman.jpg?crop=0,117,2000,1100&wid=4000&hei=2200&scl=0.5"
        }
    ]

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">

                                <img src={d.img} alt="" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />

        </div>
    );
}
