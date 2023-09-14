import React from 'react'
import ProjectImage from './ProjectImage'
import ProjectDescription from './ProjectDescription'

const Projects = () => {
  const getList=(str) => {
    // Remove any leading or trailing whitespace
    const trimmedStr = str.trim();

    // Split the string by commas and trim each item
    const array = trimmedStr.split(',').map(item => item.trim());

    return array;
  }
  return (
    <section className='projects' id='projects'>
      <h3>Projects</h3>
      <div className="project-container">
        <div className="project-item">
          <ProjectImage 
            img='/images/tula-rajbanshi.jpg'
          />
          <ProjectDescription 
            title='TULA RAJBANSHI Portfolio'
            description='A portfolio website of my family veterinarian. It is a static single page website that I have built using semantic HTML, CSS and some Javascript.' 
            list={getList('HTML,SCSS,Javascript')}
          />
        </div>
        <div className="project-item">
          <ProjectImage 
            img='/images/movie-database.jpg'
          />
          <ProjectDescription 
            title='Movie Database'
            description='Displays newly released movies with their descriptions. I have used the TMDB API to get the movie data and display them. It also has search functionality and genre selection.' 
            list={getList('HTML,CSS,Javascript,API')}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects