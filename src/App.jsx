import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // On mount, check localStorage and set dark mode
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // When isDarkMode changes, update <html> class and localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-yellow-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </div>
  )
}

export default App