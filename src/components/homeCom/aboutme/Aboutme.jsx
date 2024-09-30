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
                    As a Passionate <b>Full Stack Web Developer</b>, I thrive on building intuitive, efficient, and scalable <b>Web Applications</b> that make a real impact. With expertise in both <span>frontend</span> and <span>backend</span> development, I bring ideas to life using modern technologies like React.js, Node.js, and Express. My love for problem-solving drives me to continuously learn and adopt the latest innovations in <b>Web Development</b>. Whether it's creating seamless user interfaces or designing robust server-side logic, I'm dedicated to crafting solutions that enhance user experiences and streamline business operations. <br /><br />Let’s build something amazing together!
                </p>
                <div className='know-more'>
                    <Link to="about">know more!</Link>
                </div>
            </div>
        </div>
    )
}

export default Aboutme