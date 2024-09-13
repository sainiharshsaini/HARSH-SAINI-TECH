import './project.scss' 

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


const Project = () => {
    return (
        <div className="portfolio-project">
            <div className="project-card">
                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/PDF_Portfolio.png/640px-PDF_Portfolio.png" alt="Card image cap" />
                <div className="card-body">
                    <h3 className="card-title">TIC-TAC-TOE</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, asperiores?</p>
                    <div className="technology-use">
                        <img src={htmlIcon} alt="" />
                        <img src={cssIcon} alt="" />
                        <img src={jsIcon} alt="" />
                    </div>
                    <a to="/" className="btn btn-primary">VIEW PROJECT</a>
                </div>
            </div>
        </div>
    )
}

export default Project