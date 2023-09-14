import React, { useEffect, useRef } from 'react'
import ExperienceDate from './ExperienceDate'
import ExperienceType from './ExperienceType'

const Experience = () => {

  // make reference for experience-container
  const experienceContainerRef = useRef(null)

  const ExtraDiv = () => {
    return (
      <div className="extra-div"></div>
    )
  }

  const handleMouseMove = (e) => {
    for(const card of document.getElementsByClassName('experience-item')){
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
    }
  }

  useEffect(()=> {
    const experienceContainer = experienceContainerRef.current

    if(experienceContainer){
      experienceContainer.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if(experienceContainer){
        experienceContainer.removeEventListener("mousemove",handleMouseMove);
      }
    }
  },[])

  return (
    <article className="experience">
        <h3>Experience</h3>
        <div className="experience-container" ref={experienceContainerRef}>
          <div className="experience-item">
            <ExtraDiv />
            <ExperienceDate 
              style={{zIndex: '4'}}
              date='Mar 2023 - Present'
            />
            <ExperienceType 
              style={{zIndex: '4'}}
              description='Left previous job to persue my dream of becoming a Fullstack Web Develoepr. Currently learning React and developing some small projects.'
            />
          </div>
          <div className="experience-item">
            <ExtraDiv />
            <ExperienceDate
              style={{zIndex: '4'}}
              date='Mar 2022 - Mar 2023'
            />
            <ExperienceType 
              style={{zIndex: '4'}}
              position='Content Writer . Tech Central'
              description='Wrote articles on various technology topics, including software development, web design, and cybersecurity.
              Conducted research and interviews to create informative and engaging content. Collaborated with the design team to create visually appealing articles.'
            />
          </div>
          <div className="experience-item">
            <ExtraDiv />
            <ExperienceDate 
              style={{zIndex: '4'}}
              date='2022'
            />
            <ExperienceType 
              style={{zIndex: '4'}}
              position='Web Developer Intern at a startup Company'
              description='Contributed to the development of web applications, focusing on front-end interfaces using HTML, CSS, and Javascript. I gained hands-on experience in creating responsive designs and collaborating in an agile environment.'
            />
          </div>
        </div>
      </article>
  )
}

export default Experience