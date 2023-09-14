import React from "react"
import './dist/css/styles.css'
import Header from "./Header"
import About from './About'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <footer>There are still a lot of things that are left to do. Stay tuned for the complete portfolio!</footer>
    </>
  )
}

export default App
