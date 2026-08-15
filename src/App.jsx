import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const roles = [
    'MCA Student',
    'Web Developer',
    'Java Programmer',
    'Problem Solver',
    'Aspiring Software Developer',
  ]

  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="portfolio">

      {/* Background Glow Effects */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <section className="hero-section">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="intro">Hello, I'm</p>

          <h1>Khushboo Kumari</h1>

          {/* Animated Role */}
          <h2 className="role-text">
            I am a{' '}
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </h2>

          <p className="hero-description">
            I enjoy building creative web applications, learning new
            technologies, and solving real-world problems through code.
          </p>

          <div className="hero-buttons">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>

            <motion.button
              className="outline-btn"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="code-card"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >

            <div className="code-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
              <code>
{`const developer = {
  name: "Khushboo Kumari",
  course: "MCA",
  passion: "Coding",
  goal: "Build Amazing Things"
};

developer.keepLearning();`}
              </code>
            </pre>

          </motion.div>

        </motion.div>

      </section>

    </div>
  )
}

export default App