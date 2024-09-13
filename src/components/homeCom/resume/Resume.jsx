import './resume.scss'

import harshresume from '../../../assets/HarshResumeNew.png'

const Resume = () => {
    return (
        <div className='resume'>
            <div className="resume-content">
                <h2>Resume</h2>
                <div className="resume-img">
                    {/* <iframe src={harshresume}></iframe> */}
                    <img src={harshresume} alt="HarshSainiResume" />
                </div>
                <button>DOWNLOAD RESUME <i className="fa-solid fa-download"></i></button>
            </div>
        </div>
    )
}

export default Resume