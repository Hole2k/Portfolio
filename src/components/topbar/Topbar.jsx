import "./topbar.scss"
import { Person, Mail, SportsBasketballOutlined } from "@material-ui/icons"

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
                        <span>krystianholubowicz@gmail.com</span>
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
