import { useState } from "react";
import "./header.scss";
import { NavLink, Link } from "react-router-dom";

import HarshLogo from "../assets/harshnew.jpg";
import HarshResume from '../assets/HarshResumeNew.png'

import { useTheme } from "../hooks/useTheme";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [navlinkbg, setNavlinkbg] = useState("");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClick = (e) => {
        if (e.target.className === "active") {
            setNavlinkbg("active");
            setIsMobileMenuOpen(!isMobileMenuOpen);
        }
    };

    const [isDark, setIsDark] = useTheme();

    return (
        <nav className={`navbar ${isDark ? "dark" : ""}`}>
            <div className="navbar-data">
                <div className="logo">
                    <img src={HarshLogo} alt="harshsainilogo" />
                    <span>HARSH SAINI</span>
                </div>
                <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"}>
                    <li>
                        <NavLink className={navlinkbg} onClick={handleClick} to="/">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={navlinkbg} onClick={handleClick} to="projects">
                            PROJECTS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={navlinkbg} onClick={handleClick} to="contact/:contactId">
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
                <div
                    className={isMobileMenuOpen ? "mode-cv-mobile" : "mode-cv"}
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

                    <Link to={HarshResume} download="HarshSainiResume" target='_blank'>
                        <button>RESUME <i className="fa-solid fa-download"></i></button>
                    </Link>
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
