import React from 'react'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p style={{
                borderLeft: '2px solid white', 
                paddingLeft: '5px'
              }}>
            A Frontend Developer based on Kathmandu, Nepal.
      </p>
      <p style={{
                borderLeft: '2px solid white', 
                paddingLeft: '5px'
              }}>
            With a solid foundation in HTML, CSS, and JavaScript, I combine technical expertise with an eye for aesthetics to bring websites to life.
      </p>
      <p style={{
                  borderLeft: '2px solid white', 
                  paddingLeft: '5px'
                }}>
              I am continuously staying up-to-date with the latest web technologies and  honing my skills to deliver innovative solutions that elevate user engagement and drive results.
      </p>
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </section>
  )
}

export default About