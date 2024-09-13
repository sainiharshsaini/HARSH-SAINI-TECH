import Projectsintro from '../../components/portfolioCom/projectsintro/Projectsintro'
import Project from '../../components/portfolioCom/project/Project'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Projectsintro/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    )
}

export default Portfolio