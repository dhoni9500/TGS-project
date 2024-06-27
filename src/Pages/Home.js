import React from "react";
import Courses from "../Components/Courses";
import Courses2 from "../Components/Courses2";
import Publicreview from "../Components/Publicreview";
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
      <div className="facilities ">
        <div className="facitiles-list mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
          </div>
          <div>
            <h5>face to face training</h5>
          </div>
        </div>
        <div className="facitiles-list mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-in-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
              />
              <path
                fillRule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </div>
          <div>
            <h5>Online learning</h5>
          </div>
        </div>
        <div className="facitiles-list mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cursor-fill"
              viewBox="0 0 16 16"
            >
              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
            </svg>
          </div>
          <div>
            <h5>Virtual classroom training</h5>
          </div>
        </div>
        <div className="facitiles-list mt-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
          </div>
          <div>
            <h5>An outstanding learning experience, in 7-key IT disciplines</h5>
          </div>
        </div>
      </div>
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
