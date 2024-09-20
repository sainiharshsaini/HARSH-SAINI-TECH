import { useState } from "react";
import "./header.scss";
import { NavLink} from "react-router-dom";

import HarshLogo from "../assets/harshnew.jpg";

import { useTheme } from "../hooks/useTheme";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [navlinkbg, setNavlinkbg] = useState("");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClick = (e) => {
        if (e.target.className === "active") {
            console.log(e.target.className);
            setNavlinkbg("active");
        }
    };

    const [isDark, setIsDark] = useTheme();

    return (
        <nav className={`navbar ${isDark ? "dark" : ""}`}>
            <div className="navbar-data">
                <div className="logo">
                    <img src={HarshLogo} alt="harshsainilogo" />
                    HARSH SAINI
                </div>
                <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
                    <li>
                        <NavLink className={navlinkbg} onClick={handleClick} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={navlinkbg} onClick={handleClick} to="portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                </ul>
                <div
                    className={isMobileMenuOpen ? "social-links-mobile" : "socialLink"}
                >
                    <p
                        className="theme-changer"
                        onClick={() => {
                            setIsDark(!isDark);
                            localStorage.setItem("isDarkMode", !isDark);
                        }}
                    >
                        <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
                    </p>
                    <NavLink
                        className={navlinkbg}
                        onClick={handleClick}
                        to="contact/:contactId"
                    >
                        CONTACT
                    </NavLink>
                </div>

                <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Header;
