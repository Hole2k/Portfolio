import React from 'react';
import "./html.scss";
import { dataHTML } from "./dataHTML";


export default function Html() {
    return (
        <>
            {dataHTML.map((d) => (
                <div className="HTML-sections">
                    <hr />
                    <div className="item">

                        <div className="left">
                            <h1>{d.title}</h1>
                            <p>{d.desc}</p>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>

                </div>

            ))}
        </>
    )
}
