import React from 'react'
import Footer from '../components/Footer'
import Sponser from '../components/Sponser'
import Home1 from '../components/Home1'
import LeadershipTeam from '../components/LeadershipTeam'
import Abocom from '../components/About/Abocom'
import Conus from '../components/Conus'


const About = () => {
  return (
    <div>
        <Abocom/>
        <Home1/>
          <Conus/>
          <LeadershipTeam/>
        <Sponser/>
    </div>
  )
}

export default About
