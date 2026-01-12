import React from 'react'
import HeroSections from '../components/home/HeroSections'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home1 from '../components/Home1'
import Services from '../components/Services'
import OurProject from '../components/OurProject'
import Testimonials from '../components/Testimonials'
import LeadershipTeam from '../components/LeadershipTeam'
import NewsViews from '../components/News&Views'
import WeMake from '../components/WeMake'
import Sponser from '../components/Sponser'
import OurProject1 from '../components/OurProject1'
import Preloader from '../components/Preloader'

const HomePage = () => {
  
  return ( 
    <main>
        <HeroSections  />
        <Home1 />
        <Services />
        <OurProject1 />
        <LeadershipTeam />
        <WeMake/>
        <Testimonials/>
        <NewsViews />
        <Sponser/>
    </main>
  )
}

export default HomePage
