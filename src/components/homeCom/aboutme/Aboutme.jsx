import './aboutme.scss'

import { useTheme } from '../../../hooks/useTheme'

import { Link } from 'react-router-dom'

const Aboutme = () => {

    const [isdark] = useTheme()

    return (
        <div className={`aboutme ${isdark ? 'dark' : ''}`}>
            <div className="aboutme-section">
                <h2>ABOUT ME</h2>
                <p>
                    As a Passionate <b>Full Stack Web Developer</b>, I thrive on building intuitive, efficient, and scalable <b>Web Applications</b> that make a real impact. With expertise in both <span>frontend</span> and <span>backend</span> development, I bring ideas to life using modern technologies like React.js, Node.js, and Express. My love for problem-solving drives me to continuously learn and adopt the latest innovations in <b>Web Development</b>. Whether it's creating seamless user interfaces or designing robust server-side logic, I'm dedicated to crafting solutions that enhance user experiences and streamline business operations.
                </p>
                <p>
                    I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <Link rel="noreferrer" to="https://www.linkedin.com/in/harsh-saini-158709238" target="_blank">Linkedin</Link> and <Link rel="noreferrer" to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09" target="_blank">Twitter</Link> where I post useful content related to <b>Web Development and Programming</b>.
                </p>
                <p>
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. <br /><br />Let’s build something amazing together!
                </p>
                <div className='know-more'>
                    <Link to="/contact/:contactId">Contact me!</Link>
                </div>
            </div>
        </div>
    )
}

export default Aboutme