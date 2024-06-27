import React from "react";

const CourseCard = ({ image, title, description, price }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <div className="course-footer">
          <span className="course-price">£{price}</span>
        </div>
        <div className="view-course-btn">
          <button className="btn course-button">view course</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
