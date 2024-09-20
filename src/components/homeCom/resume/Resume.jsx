import './resume.scss'

import harshresume from '../../../assets/HarshResumeNew.png'

import { useTheme } from '../../../hooks/useTheme'

import { Link } from 'react-router-dom'

const Resume = () => {

    const [isdark] = useTheme()

    return (
        <div className={`resume ${isdark ? 'dark' : ''}`}>
            <div className="resume-content">
                <h2>Resume</h2>
                <div className="resume-img">
                    <img src={harshresume} alt="HarshSainiResume" />
                </div>
                <Link to={harshresume} download="HarshSainiResume" target='_blank'>
                    <button>DOWNLOAD RESUME <i className="fa-solid fa-download"></i></button>
                </Link>
            </div>
        </div>
    )
}

export default Resume