import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import AboutMe from './AboutMe/AboutMe'
import Skills from './Skills/Skills'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
        <Profile />
        <AboutMe />
        <Skills />
        <Footer />
    </div>
  )
}
