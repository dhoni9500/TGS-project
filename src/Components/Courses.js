import React from 'react'
import CourseCard from './CourseCard';
function Courses() {
  return (
    <div className='Courses'>
      <div className="card-container">
    <CourseCard 
      image="testing.png" 
      title="ISTQB Software Testing Foundation Course (CTFL) v4.0"
      description="The ISTQB® Certified Tester Foundation Level (CTFL) certification is the cornerstone of essential testing knowledge that can be..."
      price="1,195.00"
    />
    <CourseCard 
      image="agile.png" 
      title="ISTQB Software Testing Foundation Course (CTFL) v4.0"
      description="The Agile Testing Foundation course extends the broad understanding of testing acquired at Foundation Level and covers those top..."
      price="1,195.00"
    />
    <CourseCard 
      image="automation.png" 
      title="ISTQB Advanced Test Automation Engineer"
      description="The ISTQB Advanced Test Automation Engineer Certificate Course is a three-day course explaining the tasks of a test automation..."
      price="1,195.00"
    />
    <CourseCard 
      image="testmanager.png" 
      title="ISTQB Advanced Test Manager Course"
      description="The ISTQB Advanced Test Manager course extends the broad understanding of testing acquired at Foundation Level to enable the rol..."
      price="1,195.00"
    />
  </div>
  </div>
  )
}

export default Courses;