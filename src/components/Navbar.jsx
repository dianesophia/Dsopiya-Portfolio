import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className="fixed top-3 md:top-6 left-0 right-0 z-50 mx-auto w-full md:max-w-3xl rounded-none md:rounded-xl bg-white/70 dark:bg-gray-900/70 shadow-md border border-yellow-100/30 dark:border-yellow-700/20 backdrop-blur-md px-2 md:px-0"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="flex items-center justify-between px-3 md:px-6 py-2">
        <span className="text-base md:text-lg font-semibold text-gray-900 dark:text-white tracking-tight">Diane Sophia</span>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 px-1 py-0.5 rounded"
            >
              {item}
            </a>
          ))}
         {/* <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} small />*/}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} small />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded bg-transparent hover:bg-yellow-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-200 ease-in-out ${
          isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="py-2 px-3 space-y-2 bg-white/90 dark:bg-gray-900/90 rounded-b-none md:rounded-b-xl">
          {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-200 px-1 py-1 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 