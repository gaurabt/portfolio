import React from 'react'
import ExperienceDate from './ExperienceDate'
import ExperienceType from './ExperienceType'

const Experience = () => {
  return (
    <article className="experience">
        <h3>Experience</h3>
        <div className="experience-container">
          <div className="experience-item">
            <ExperienceDate 
              date='Mar 2023 - Present'
            />
            <ExperienceType 
              description='Left previous job to persue my dream of becoming a Fullstack Web Develoepr. Currently learning React and developing some small projects.'
            />
          </div>
          <div className="experience-item">
            <ExperienceDate 
              date='Mar 2022 - Mar 2023'
            />
            <ExperienceType 
              position='Content Writer . Tech Central'
              description='Wrote articles on various technology topics, including software development, web design, and cybersecurity.
              Conducted research and interviews to create informative and engaging content. Collaborated with the design team to create visually appealing articles.'
            />
          </div>
          <div className="experience-item">
            <ExperienceDate 
              date='2022'
            />
            <ExperienceType 
              position='Web Developer Intern at a startup Company'
              description='Contributed to the development of web applications, focusing on front-end interfaces using HTML, CSS, and Javascript. I gained hands-on experience in creating responsive designs and collaborating in an agile environment.'
            />
          </div>
        </div>
      </article>
  )
}

export default Experience