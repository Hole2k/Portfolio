import React from 'react'
import { dataJs } from "./dataJs";
import "./js.scss"

export default function Js() {


    return (
        <>
            {dataJs.map((d) => (
                <div className="js-sections">
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
