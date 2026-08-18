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

  const projects = [
    {
      title: 'COVE – Mental Health AI Chatbot',
      description:
        'An AI-powered mental health support chatbot designed to provide emotional support, mood tracking, chat history, and helpful resources.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Gemini AI'],
      github: 'https://github.com/Khushboo0829/COVE-Mental-Health-AI-Chatbot',
    },
    {
      title: 'CodeFlow Visualizer',
      description:
        'A code execution visualizer that demonstrates how programming logic runs step by step using memory updates, output tracking, and code highlighting.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Khushboo0829/CodeFlow-Visualizer',
    },
  ]

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      college: 'Banasthali Vidyapith, Rajasthan',
      status: 'Currently Pursuing',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      college: 'Banasthali Vidyapith, Rajasthan',
      status: 'Completed',
    },
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

      {/* PROJECTS SECTION */}
      <section className="projects-section" id="projects">
        <motion.div
          className="projects-container"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>

          <p className="projects-description">
            A few projects I have built while learning and applying my
            development skills.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
              >
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-button"
                >
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="education-section" id="education">
        <motion.div
          className="education-container"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My <span>Education</span>
          </h2>

          <p className="education-description">
            My academic journey and the foundation of my development career.
          </p>

          <div className="education-timeline">
            {education.map((item, index) => (
              <motion.div
                className="education-item"
                key={item.degree}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -70 : 70,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
              >
                <div className="timeline-dot"></div>

                <div className="education-card">
                  <span className="education-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3>{item.degree}</h3>

                  <p>{item.college}</p>

                  <span className="education-status">
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
              {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">

        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="section-title">
            Let's <span>Connect</span>
          </h2>

          <p className="contact-description">
            I'm always open to learning opportunities, collaborations,
            internships, and conversations about technology and development.
            Feel free to connect with me.
          </p>

          <div className="contact-grid">

            {/* EMAIL */}
            <motion.a
              href="mailto:khushboo2908kumari@gmail.com"
              className="contact-card"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="contact-icon">✉</div>

              <div>
                <span>Email</span>
                <h3>khushboo2908kumari@gmail.com</h3>
              </div>

              <div className="contact-arrow">→</div>
            </motion.a>


            {/* LINKEDIN */}
            <motion.a
              href="https://www.linkedin.com/in/khushboo-kumari2908"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="contact-icon">in</div>

              <div>
                <span>LinkedIn</span>
                <h3>Khushboo Kumari</h3>
              </div>

              <div className="contact-arrow">→</div>
            </motion.a>


            {/* GITHUB */}
            <motion.a
              href="https://github.com/Khushboo0829"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="contact-icon">&lt;/&gt;</div>

              <div>
                <span>GitHub</span>
                <h3>Khushboo0829</h3>
              </div>

              <div className="contact-arrow">→</div>
            </motion.a>

          </div>


          <motion.div
            className="contact-message"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>Have an opportunity or want to collaborate?</p>

            <a href="mailto:khushboo2908kumari@gmail.com">
              Send Me a Message
            </a>
          </motion.div>

        </motion.div>

      </section>
    </div>
  )
}

export default App