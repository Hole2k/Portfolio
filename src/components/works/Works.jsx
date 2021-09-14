import { useState } from "react";
import "./works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/www.png",
            title: "PrestaShop platform ",
            desc: "Creation of a website based on the prestashop platform. Installation and configuration of the website and modules.",
            img: "https://cdn.pixabay.com/photo/2021/05/23/10/14/internet-6275737_960_720.png",
            // url: "http://nowy.hitech.com.pl/"
        },
        {
            id: "2",
            icon: "./assets/pagelogo.jpg",
            title: "Creator website",
            desc: "Creating an online store containing figurines. The website will have functionalities that an online store should have. Project created using ReactJS.",
            img: "./assets/page.gif",
            url: "https://github.com/Hole2k/Hooy-s-Vision"
        },
        {
            id: "3",
            icon: "./assets/basketball.png",
            title: "Basketball player",
            desc: "After hours a basketball player playing for the amateur team Colosseum. Having many prizes, including dunk competitions.",
            img: "./assets/dunk.png",
            url: "http://www.blskoszykowka.ligspace.pl/index.php?mod=Players&ac=Profile&lp_id=698"
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
                                    <span><a href={d.url} target="_blank">Website</a></span>
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
