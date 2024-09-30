import './footer.scss'

import HarshLogo from '../assets/harshnew.jpg'

import { Link } from 'react-router-dom'

import { useTheme } from '../hooks/useTheme'

const Footer = () => {

    const [isdark] = useTheme()

    return (
        <div className={`footer ${isdark ? 'dark' : ''}`}>
            <div className="upper-footer">
                <div className="left-footer">
                    <img src={HarshLogo} alt="HarshSainiLogo" />
                    <h1>HARSH SAINI</h1>
                    <p>Coding the future: personalized Web development services.</p>
                    <div className="email-link">
                        <Link to="mailto: singhharshsaini7@gmail.com"><i className="fa-regular fa-envelope"></i> : singhharshsaini7@gmail.com</Link>
                    </div>
                </div>
                <div className="right-footer">
                    <div className='social-box'>
                        <p>Get in touch with me via social media.</p>
                        <div className="social-link">
                            <Link to="https://www.linkedin.com/in/harsh-saini-158709238"><i className="fa-brands fa-linkedin-in"></i></Link>
                            <Link to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09"><i className="fa-brands fa-twitter"></i></Link>
                            <Link to="https://github.com/sainiharshsaini"><i className="fa-brands fa-github"></i></Link>
                            <Link to="https://wa.me/qr/4AD67ER2Z2ZRD1"><i className="fa-brands fa-whatsapp"></i></Link>
                        </div>
                        </div>
                </div>
            </div>
            <div className="lower-footer">
                <p>
                © Copyright 2024 . Made by
                </p>
                <Link rel="noreferrer" target="_blank" href="https://harshsaini.tech">Harsh Saini</Link>
            </div>
        </div>
    )
}

export default Footer