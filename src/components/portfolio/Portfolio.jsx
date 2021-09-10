import { useEffect, useState } from "react";
import PortfolioList from "../porfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured"
        },

        {
            id: "web",
            title: "Web App"
        },

        {
            id: "mobile",
            title: "Mobile App"
        },

        {
            id: "design",
            title: "Design"
        },

        {
            id: "content",
            title: "Content"
        }
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected} />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/rev-studio.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src="https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/rev-studio.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/rev-studio.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/rev-studio.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/rev-studio.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/rev-studio.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
