
import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { intro } from './data';
export default function Projects() {
  const [value, setValue] = useState(0)
  const {id, name, type, time, summary, achievements, link} = intro[value]

  return (
    <section className="section">
      <div className="title">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="proj-center">
        {/* btn container */}
        <div className="btn-container">
          {intro.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`proj-btn ${index === value && "active-btn"}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {/* proj info */}
        <article className="proj-info">
          <h3>{summary}</h3>
          <h4>{type}</h4>

          <p className="proj-date">{time}</p>
          {achievements.map((achievement, index) => {
            return (
              <div key={index} className="proj-desc">
                <FaAngleDoubleRight className="proj-icon"></FaAngleDoubleRight>
                <p>{achievement}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        <a href={link} target="_blank">
          {" "}
          View in github
        </a>
      </button>
    </section>
  );
}