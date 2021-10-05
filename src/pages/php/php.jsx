import React from 'react';
import "./php.scss";
import { dataPHP } from "./dataPHP";


export default function PHP() {
    return (
        <>
            {dataPHP.map((d) => (
                <div className="php-sections">
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
