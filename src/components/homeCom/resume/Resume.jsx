import './resume.scss'

import { useTheme } from '../../../hooks/useTheme'

import { Link } from 'react-router-dom'

const Resume = () => {

    const [isdark] = useTheme()

    return (
        <div className={`resume ${isdark ? 'dark' : ''}`}>
            <div className="resume-content">
                
                
                
            </div>
        </div>
    )
}

export default Resume