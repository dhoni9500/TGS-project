import React from "react";
import '../css/contactpage.css';

export default function Contact() {
    console.log("contact");
  return (
    <div className="main-content-1">
      <h1>CONTACT US</h1>
        
        <div className="contact-form p-2">
          <form >
              <h6>first Name</h6>
              <input type="text" />
              <h6>last Name</h6>
              <input type="text" />
              <h6>email</h6>
              <input type="text" />
              <h6>phone no:</h6>
              <input type="text" />
              <h6>your message</h6>
              <input type="paragraph" />
              <div className="submit-form-button">
              <button type="submit" className="btn btn-warning m-4">submit</button>
              </div>
          </form>
        </div>
    </div>
  )
}