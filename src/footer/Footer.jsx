import './footer.scss'

import HarshLogo from '../assets/harshnew.jpg'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-item">
                <div className="left-footer">
                    <img src={HarshLogo} alt="HarshSainiLogo" />
                    <h1>HARSH SAINI</h1>
                    <p>Coding the future: personalized Web development services.</p>
                    <div className="email-link">
                        <Link to="singhharshsaini7@gmail.com"><i className="fa-regular fa-envelope"></i> : singhharshsaini7@gmail.com</Link>
                    </div>
                </div>
                <div className="right-footer">
                    <div className="left-link">
                        <h4>Find me at</h4>
                        <div className="socialLink">
                            <Link to="https://www.linkedin.com/in/harsh-saini-158709238"><i className="fa-brands fa-linkedin-in"></i>  Linkedin</Link>
                            <Link to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09"><i className="fa-brands fa-twitter"></i> Twitter</Link>
                            <Link to="https://github.com/sainiharshsaini"><i className="fa-brands fa-github"></i> Github</Link>
                            <Link to="https://www.instagram.com/harshsaini.tech/"><i className="fa-brands fa-instagram"></i> Instagram</Link>
                            <Link to="https://wa.me/qr/4AD67ER2Z2ZRD1"><i className="fa-brands fa-whatsapp"></i> WhatsApp</Link>
                        </div>
                    </div>
                    <div className="right-link">
                        <h4>Updates</h4>
                        <div className="updates">
                            <Link to="/">Blog</Link>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer