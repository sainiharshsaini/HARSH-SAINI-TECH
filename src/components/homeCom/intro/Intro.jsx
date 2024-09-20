import './intro.scss'

import { useTheme } from '../../../hooks/useTheme'

const Intro = () => {

    const [isdark] = useTheme()

    return (
        <div className={`home-intro ${isdark ? 'dark' : ''}`}>
            <div className="home-content">
                <div className="hero-section">
                    <h1>Hi,<br /> I'm <span>Harsh Saini</span>, <br />a Web Developer</h1>
                    <p>Crafting seamless and dynamic web experiences that bring ideas to life.</p>
                    <button>Get in Touch <i className="fa-solid fa-arrow-right-long"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Intro