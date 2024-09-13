import './mytechstack.scss'

import htmlIcon from '../../../assets/HTML_icon.svg'
import cssIcon from '../../../assets/CSS_icon.svg'
import jsIcon from '../../../assets/JS_icon.svg'
import reactIcon from '../../../assets/React_icon.svg'
import bootstrapIcon from '../../../assets/Bootstrap_icon.svg'
import nodeIcon from '../../../assets/Node_icon.svg'
import expressIcon from '../../../assets/Express_icon.svg'
import mongodbIcon from '../../../assets/MongoDB_icon.svg'
import vscodeIcon from '../../../assets/VSCode_icon.svg'
import gitIcon from '../../../assets/Git_icon.svg'
import githubIcon from '../../../assets/Github_icon.svg'

const MyTechStack = () => {
    return (
        <div className='mytechstack'>
            <div className="skills-content">
                <h2>My Tech Stack</h2>
                <div className="stack-icon">
                    <div className="icon">
                    <img src={htmlIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={cssIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={jsIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={reactIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={bootstrapIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={nodeIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={expressIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={mongodbIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={vscodeIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={gitIcon} alt="" />
                    </div>
                    <div className="icon">
                    <img src={githubIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTechStack