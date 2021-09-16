import "./topbar.scss"
import { Person, Mail, SportsBasketballOutlined, LinkedIn, GitHub, Instagram } from "@material-ui/icons"

export default function topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Ant.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+48 504 398 023</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span><a href="mailto:krystianholubowicz@gmail.com">krystianholubowicz@gmail.com</a></span>
                    </div>
                    <div className="social">

                        <a href="https://pl.linkedin.com/in/krystian-ho%C5%82ubowicz-493bbb199" target="_blank" rel="noreferrer">  < LinkedIn className="linkedIn" /></a>
                        <a href="https://github.com/Hole2k" target="_blank" rel="noreferrer"> < GitHub className="gitHub" /></a>
                        <a href="https://www.instagram.com/hole2k/" target="_blank" rel="noreferrer"> < Instagram className="instagram" /></a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <SportsBasketballOutlined className="basket" />
                    </div>
                </div>
            </div>
        </div>
    )
}
