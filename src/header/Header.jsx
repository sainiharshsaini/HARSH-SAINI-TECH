import { useState } from "react";
import './header.scss'
import { NavLink, Link } from "react-router-dom";

import HarshLogo from '../assets/harshnew.jpg'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [navlinkbg, setNavlinkbg] = useState("")

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const handleClick = (e) => {
        if (e.target.className === "active") {
            console.log(e.target.className);
            setNavlinkbg("active")
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-data">
                <div className="logo">
                    <img src={HarshLogo} alt="harshsainilogo" />
                    HARSH SAINI
                </div>
                <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
                    <li><NavLink className={navlinkbg} onClick={handleClick} to="/">Home</NavLink></li>
                    <li><NavLink className={navlinkbg} onClick={handleClick} to="portfolio">Portfolio</NavLink></li>
                    <li><NavLink className={navlinkbg} onClick={handleClick} to="contact/:contactId">Contact</NavLink></li>
                </ul>
                <div className={isMobileMenuOpen ? "social-links-mobile" : "socialLink"}>
                    <Link className={navlinkbg} onClick={handleClick} to="https://github.com/sainiharshsaini"><i className="fa-brands fa-github"></i></Link>
                    <Link to="https://www.linkedin.com/in/harsh-saini-158709238"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09"><i className="fa-brands fa-square-twitter"></i></Link>
                </div>


                <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                </button>
            </div>
        </nav>
    )
}

export default Header