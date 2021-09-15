import React from 'react'
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";
import Works from "../../components/works/Works";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";


export default function Main() {

    return (
        <>

            <div className="sections">
                <Intro />
                <Portfolio />
                <Works />
                <Testimonials />
                <Contact />
            </div>
        </>
    )
}

