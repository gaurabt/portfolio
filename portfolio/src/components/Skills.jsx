import React from 'react'
import Card from './Card'

const Skills = () => {
  return (
    <article className='skills'>  
        <h3>My Skillsets</h3>
        <div className="card-container">
        <Card img='/images/logo/html.png' alt='html'/>
        <Card img='/images/logo/css.png' alt='css'/>
        <Card img='/images/logo/javascript.png' alt='javascript'/>
        <Card img='/images/logo/react.png' alt='React'/>
        <Card img='/images/logo/tailwind.png' alt='tailwind'/>
        </div>
      </article>
  )
}

export default Skills