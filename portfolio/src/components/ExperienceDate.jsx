import React from 'react'

const ExperienceDate = (props) => {
  return (
    <article className="experience-date" style={props.style}>
      <p>{props.date}</p>
    </article>
  )
}

export default ExperienceDate