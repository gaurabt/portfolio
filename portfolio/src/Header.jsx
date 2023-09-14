import React, { useRef } from 'react'
import { useState,useEffect } from 'react'

const Header = () => {
  const [show, setShow] = useState(true)

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  useEffect(()=> {
    const handleScroll = () => {
      const top = window.scrollY === 0
      setShow(top)
    }

    window.addEventListener('scroll', handleScroll)

    return(()=> {
      window.removeEventListener('scroll', handleScroll)
    })
  },[])

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let interval = null

  const handlehover = (e) =>{
      let iteration = 0
      
      //clear previous interval
      clearInterval(interval)
      interval = setInterval(()=>{
        e.target.innerText = e.target.innerText.split('').map((letter,index) => {
          if(index<iteration){
            return e.target.dataset.value[index]
          } 
          return letters[Math.floor(Math.random()*26)]
        }).join('')

        if(iteration >= e.target.dataset.value.length){
          clearInterval(interval)
        }

        iteration += 1/3
      },30)
  }

  useEffect(()=>{
    const firstName = firstNameRef.current

    if(firstName){
      firstName.addEventListener('mouseover',handlehover)
    }

    return () => {
      if(firstName){
        firstName.removeEventListener('mouseover', handlehover)
      }
    }
  },[])

  useEffect(()=>{
    const lastName = lastNameRef.current

    if(lastName){
      lastName.addEventListener('mouseover',handlehover)
    }

    return () => {
      if(lastName){
        lastName.removeEventListener('mouseover', handlehover)
      }
    }
  },[])

  const Arrow = () => {
    return(
      <div className="arrow">
          <p style={{fontSize: '0.8rem',}}>Scroll down to see more</p>
          <span className="material-symbols-outlined">arrow_downward</span>
        </div>
    )
  }

  return (
    <header>
        <ul className='nav'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <section className="wrapper">
          <div className="name">
            <h1 
              data-value='Gaurav' 
              ref={firstNameRef}>Gaurav</h1>
            <h1 
              data-value='Tamang'
              ref={lastNameRef}
            >Tamang</h1>
          </div>
          <h3>&#60;Frontend Developer /&#62;</h3>
        </section>
        {show && <Arrow />}
    </header>
  )
}

export default Header