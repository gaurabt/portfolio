import React from 'react'

const ProjectDescription = ({title, description, list}) => {
  return (
    <article className="project-description">
      <h4>{title}</h4>
      <p style={{fontSize: '13px', wordSpacing: '1.5px'}}>{description}</p>
      <ul style={{
        display: 'flex', 
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '0',
        marginTop: '2rem'
      }}>
      {list.map((item,index)=> {
        return(
          <li style={{
            listStyleType: 'none', 
            border: '1px solid white', 
            padding: '0.5rem 1rem',
            borderRadius: '1.2rem',
            fontSize: '0.8rem',
          }} key={index}>{item}</li>
        )
      })}
      </ul>
    </article>
  )
}

export default ProjectDescription