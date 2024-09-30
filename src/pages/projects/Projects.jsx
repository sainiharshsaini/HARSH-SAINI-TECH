import Projectsintro from '../../components/portfolioCom/projectsintro/Projectsintro'

import './projects.scss'

import { Link } from "react-router-dom";

import { useTheme } from '../../hooks/useTheme'

import projectData from '../../projectsData'
import { useState } from 'react'

const Portfolio = () => {

    const [projectDetail] = useState(projectData)

    const [isdark] = useTheme()

    return (
        <div className='portfolio'>
            < Projectsintro />
            {
                projectDetail.map(({ id, projectImg, projectName, aboutProject, techUsed, deployLink, githubLink }) => (
                    <div className={`portfolio-project ${isdark ? 'dark' : ''}`} key={id}>
                        <div className="project-card">
                            <img className="card-img-top" src={projectImg} alt="projectImg" />
                            <div className="card-body">
                                <h3 className="card-title">{projectName}</h3>
                                <p className="card-text">{aboutProject}</p>
                                <div className="technology-use">
                                        {
                                            techUsed.map(({id, icon}) => (
                                                <img src={icon} key={id}/>
                                            ))
                                        }
                                </div>
                                <div className='link-btn'>
                                    <Link to={githubLink} className="btn btn-primary"><i className="fa-brands fa-github"></i> SOURCE CODE</Link>
                                    <Link to={deployLink} className="btn btn-primary"><i className="fa-solid fa-eye"></i>  VIEW PROJECT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Portfolio