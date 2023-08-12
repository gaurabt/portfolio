import React from 'react'

const Education = () => {
  return (
    <section className="education">
      <h3>Education</h3>
      <article className="education-container">
        <div className="education-item">
          <div className="education-duration">
            <p>2013 - 2015</p>
          </div>
          <div className="education-degree">
            <h4>High School Degree</h4>
            <h5>St. Lawrence College</h5>
          </div>
        </div>
        <div className="education-item">
          <div className="education-duration">
            <p>2015-2021</p>
          </div>
          <div className="education-degree">
            <h4>Undergraduate Program</h4>
            <h5>Bachelors of Science in Computer Science and Information Technology (Bsc.CSIT)</h5>
            <h5>St. Lawrence College</h5>
          </div>
        </div>
        <div className="education-item">
          <div className="education-duration">
            <p>Present</p>
          </div>
          <div className="education-degree">
            <h4>Planning for Master's Degree</h4>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Education