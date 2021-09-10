import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"
export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Developer", "Designer", "Content creator"]
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Krystian Hołubowicz</h1>
                    <h3>Freelance <span ref={textRef}>  </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
