import './mytechstack.scss'

import htmlIcon from '../../../assets/icons/HTML_icon.svg'
import cssIcon from '../../../assets/icons/CSS_icon.svg'
import jsIcon from '../../../assets/icons/JS_icon.svg'
import reactIcon from '../../../assets/icons/React_icon.svg'
import bootstrapIcon from '../../../assets/icons/Bootstrap_icon.svg'
import nodeIcon from '../../../assets/icons/Node_icon.svg'
import expressIcon from '../../../assets/icons/Express_icon.svg'
import mongodbIcon from '../../../assets/icons/MongoDB_icon.svg'
import vscodeIcon from '../../../assets/icons/VSCode_icon.svg'
import gitIcon from '../../../assets/icons/Git_icon.svg'
import githubIcon from '../../../assets/icons/Github_icon.svg'

import { useTheme } from '../../../hooks/useTheme'

const MyTechStack = () => {

    const [isdark] = useTheme()

    return (
        <div className={`mytechstack ${isdark ? 'dark' : ''}`}>
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