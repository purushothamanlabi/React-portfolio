import React from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Certificates from './components/Certificates'
import { Education } from './components/Education'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <LandingPage />
      {/* <About /> */}
      <Skills />
      <Education/>
      <Certificates/>
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
