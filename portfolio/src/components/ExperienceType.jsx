import React from 'react'

const ExperienceType = (props) => {
  return (
    <article className="experience-type">
      <h4>{props.position}</h4>
      <p style={{fontSize:'0.89rem'}}>{props.description}</p>
    </article>
  )
}

export default ExperienceType