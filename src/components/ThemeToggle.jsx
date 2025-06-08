import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #0f172a, #1e293b)' 
          : 'linear-gradient(135deg, #fef3c7, #fbbf24)',
        boxShadow: isDarkMode 
          ? '0 0 15px rgba(251, 191, 36, 0.2)' 
          : '0 0 15px rgba(251, 191, 36, 0.1)'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <svg 
          className="w-4 h-4 text-yellow-500/30" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
        <svg 
          className="w-4 h-4 text-yellow-500/30" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      </div>

      {/* Sliding Circle */}
      <motion.div
        className="absolute left-1 top-1 h-6 w-6 rounded-full"
        style={{
          background: isDarkMode
            ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
            : 'linear-gradient(135deg, #ffffff, #fef3c7)',
          boxShadow: isDarkMode
            ? '0 0 10px rgba(251, 191, 36, 0.5)'
            : '0 0 10px rgba(251, 191, 36, 0.2)'
        }}
        animate={{
          x: isDarkMode ? 32 : 0,
          rotate: isDarkMode ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {isDarkMode ? (
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                color: '#0f172a',
                filter: 'drop-shadow(0 0 2px rgba(15, 23, 42, 0.3))'
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
          ) : (
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                color: '#f59e0b',
                filter: 'drop-shadow(0 0 2px rgba(245, 158, 11, 0.3))'
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              />
            </svg>
          )}
        </div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 