import './home.scss'

import Intro from '../../components/homeCom/intro/Intro'
import Aboutme from '../../components/homeCom/aboutme/Aboutme'
import MyTechStack from '../../components/homeCom/mytechstack/MyTechStack'
import Resume from '../../components/homeCom/resume/Resume'

const Home = () => {
    return (
        <div className="home">
            <Intro/>
            <Aboutme/>
            <MyTechStack/>
            <Resume/>
        </div>
    )
}

export default Home