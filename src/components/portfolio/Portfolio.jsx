import { useEffect, useState } from "react";
import PortfolioList from "../porfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio, knowledgePortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },

        {
            id: "knowledge",
            title: "Knowledge"
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

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;

            case "knowledge":
                setData(knowledgePortfolio)
                break;


            case "mobile":
                setData(mobilePortfolio)
                break;


            case "design":
                setData(designPortfolio)
                break;


            case "content":
                setData(contentPortfolio)
                break;
            default:
                setData(featuredPortfolio)

        }


    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                        />
                        <h3><a href={d.url}>{d.title}</a></h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
