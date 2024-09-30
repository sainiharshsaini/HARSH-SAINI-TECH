import './projectsintro.scss'

import { useTheme } from '../../../hooks/useTheme'

const Projectsintro = () => {

    const [isdark] = useTheme()

    return (
        <div className={`intro ${isdark ? 'dark' : ''}`}>
            <div className="intro-heading">
                <h1>MY PROJECTS</h1>
                <h2>A Blend of <span>Creativity</span> and <span>Code</span></h2>
                <p>Explore a selection of my recent projects, each one representing a unique challenge and a testament to my skills in web development. From concept to completion, I am dedicated to delivering work that exceeds expectations, drives results, and tells a story. Every project is an opportunity to learn, grow, and push my craft further.</p>
            </div>
        </div>
    )
}

export default Projectsintro