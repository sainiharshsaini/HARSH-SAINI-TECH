import './home.scss'

import Intro from '../../components/homeCom/intro/Intro'
import Aboutme from '../../components/homeCom/aboutme/Aboutme'
import MyTechStack from '../../components/homeCom/mytechstack/MyTechStack'

const Home = () => {
    return (
        <div className="home">
            <Intro/>
            <Aboutme/>
            <MyTechStack/>
        </div>
    )
}

export default Home