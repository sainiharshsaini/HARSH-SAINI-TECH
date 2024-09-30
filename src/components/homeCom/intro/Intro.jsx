import './intro.scss'

import { useTheme } from '../../../hooks/useTheme'
import { Link } from 'react-router-dom'

const Intro = () => {

    const [isdark] = useTheme()

    return (
        <div className={`home-intro ${isdark ? 'dark' : ''}`}>
            <div className="home-section">
                <div className="home-content">
                    <div className='home-name'>
                        <h1>HEY, I'M HARSH SAINI</h1>
                    </div>
                    <div className="home-sub-heading">
                        <p>A passionate web developer specializing in building modern, responsive web applications. I have a strong interest in creating scalable SaaS platforms that enhance user experience and solve real-world problems.</p>
                    </div>
                    <div className='home-btn'>
                        <Link to='/projects'>
                            PROJECTS <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro