import React from 'react'

const ProjectImage = (props) => {
  return (
    <article className="project-image">
      <img src={props.img} alt={props.alt} />
    </article>
  )
}

export default ProjectImage