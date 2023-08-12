import React from 'react'

const Card = (props) => {
  return (
    <article className='card'>
      <img src={props.img} alt={props.alt} />
    </article>
  )
}

export default Card