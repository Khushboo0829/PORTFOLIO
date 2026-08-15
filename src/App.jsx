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

  const skills = [
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'MySQL',
    'Git',
    'GitHub',
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

      {/* BACKGROUND EFFECTS */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="intro">Hello, I'm</p>

          <h1>Khushboo Kumari</h1>

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

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">

        <motion.div
          className="about-container"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="about-text">
            I am Khushboo Kumari, currently pursuing my Master of Computer
            Applications (MCA) from Banasthali Vidyapith, Rajasthan.
            I have also completed my Bachelor of Computer Applications (BCA)
            from Banasthali Vidyapith.
          </p>

          <p className="about-text">
            I am passionate about software development, web technologies,
            Java programming, and problem solving. I enjoy learning new
            technologies and applying my knowledge by building practical
            projects.
          </p>

          <div className="about-cards">

            <motion.div
              className="about-card"
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <h3>MCA</h3>
              <p>Banasthali Vidyapith</p>
              <span>Currently Pursuing</span>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <h3>BCA</h3>
              <p>Banasthali Vidyapith</p>
              <span>Completed</span>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <h3>Focus</h3>
              <p>Software Development</p>
              <span>Learning & Building</span>
            </motion.div>

          </div>

        </motion.div>

      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section" id="skills">

        <motion.div
          className="skills-container"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">
            My <span>Skills</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I currently use while learning,
            practicing, and building projects.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
              >
                <div className="skill-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3>{skill}</h3>

                <div className="skill-line"></div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </section>

    </div>
  )
}

export default App