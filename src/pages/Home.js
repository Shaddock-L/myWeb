import React from 'react'

export default function Home() {
  return (
    <main>
      <div className="home-center">
        <h1>Welcome to my website</h1>
      </div>
      <div className="home-content">
        <h3 className="content">Education</h3>
        <div className="underlineEdu"></div>
        <h4 className="text">UNSW</h4>
        <p className="text">
          Master of Information Technology, Artificial Intelligence
        </p>
        <p className="grade">Grade: Distinct</p>
        <h4 className="text">Northeastern University (CN)</h4>
        <p className="text">
          Bachelor of Engineering - BE, Mechanical Engineering
        </p>
        <p className="grade">Grade: 80</p>
        <br></br>
        <h3 className="content">Skills</h3>
        <div className="underlineSki"></div>
        <h4 className="text">
          Python, C++, C, Linux, JavaScript, SQL, GitHub, React.js,
          Scikit-Learn, PyTorch, Pandas, Back-End Web Development, RESTful WebServices,PostgreSQL.
        </h4>
      </div>
    </main>
  );
}
