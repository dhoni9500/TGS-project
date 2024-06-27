import React from "react";
import Courses from "../Components/Courses";
import Courses2 from "../Components/Courses2";
import Publicreview from "../Components/Publicreview";
import Facilitiesbar from "../Components/Facilitiesbar";
function Home() {
  return (
    <div className="main-content">
      <div className="add-1 ">
        <div className="add-1-text">
          <div >
          <div className="add-heading-1">
            <h2>Training to take you further</h2>
          </div>
          <div className="add-heading-2">
            <h3>
              The experts in software testing courses
              <br />
              TSG Training delivers quality you can trust to help you succeed.
            </h3>
          </div>
          <div className="rating-line">
            <div>
              <h4>Average rating: 4.81 based on 1150 reviews</h4>
            </div>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div>
              <span>click here to view reviews</span>
            </div>
          </div>
          </div>
          <div className="add-1-img">
          <img className="codingimg" src="codingimg.png" />
        </div>
        </div>
        
      </div>

      <div className="add-2">
        <h3>20 YEARS EXPERIENCE AND ABOVE INDUSTRY STANDARD PASS RATES</h3>{" "}
      </div>
      <div className="secondary-container">
      <div className="cards-heading d-flex justify-content-center">
        <h1>Our most popular courses</h1>
      </div>
      <Courses />
      <Courses2 />
      <h3 className="all-course">
        <a href="">CLICK HERE</a> TO VIEW ALL COURSES
      </h3>
      <Facilitiesbar/>
      <Publicreview />
      <div className="why-card">
        <h1>Why train with TSG Training ?</h1>
        <p>
          Our trainers offer a lifetime of support after each course. Our pass
          rates are consistently above industry averages, however, if you do not
          pass first time, you can sit on a subsequent course free of charge
          (just pay the exam fee). Over 98% of our delegates rate our trainers
          ‘good’ or ‘excellent’. TSG Training have been a knowledgeable,
          reputable UK training provider for almost 20 Years.
        </p>
        <button className="btn  btn-warning">read more</button>
      </div>
      </div>
    </div>
  );
}

export default Home;
