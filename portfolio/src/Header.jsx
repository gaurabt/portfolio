import React from 'react'
import { useState,useEffect } from 'react'

const Header = () => {
  const [show, setShow] = useState(true)

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
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <secton className="wrapper">
          <div className="name">
            <div className="first-name">
              <span>G</span>
              <span>a</span>
              <span>u</span>
              <span>r</span>
              <span>a</span>
              <span>v</span>
            </div>
            <div className="second-name">
              <span>T</span>
              <span>a</span>
              <span>m</span>
              <span>a</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>
          <h3>&#60;Frontend Developer /&#62;</h3>
        </secton>
        {show && <Arrow />}
    </header>
  )
}

export default Header