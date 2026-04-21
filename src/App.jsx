import React from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import PageBackground from './components/PageBackground'

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <PageBackground />
      <Header />
      <main className="relative z-10">
        <LandingPage />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <ContactMe />
        <Footer />
      </main>
    </div>
  )
}

export default App
