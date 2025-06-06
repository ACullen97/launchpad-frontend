import React from "react";
import "./About.css";
import code1 from "../../assets/crowd-event-hero.jpg";

const About = () => {
  return (
    <>
    <div className="about">
      <div className="about-left">
        <img src={code1} alt="code" />
      </div>
      <div className="about-right">
        <h2>About Us</h2>
        <br />
        <p>
         Hi we are Evently, an events platform designed to host events in the local area. Starting out as a platform to help others connect with the events they are interested in, then branching out into a variety of sectors such as business, sports and nightlife. We love helping people connect their events to a wider audience and creating a positive impact for both the host and attendee. Thank you for checking out Evently!
        </p>
      </div>
    </div>
        <div className="about">
      <div className="about-right">
   
          <h2> Contact Us</h2>
           <br />
           <p>Please feel free to reach out regarding questions or anything else!</p>
           <ul>
            <li>admin@evently.com</li>
            <li>07387 076 782</li>
            <li>@eventlyevents</li>
           </ul>
      </div>
      <div className="about-left">
               <img src={code1} alt="code" />
      </div>
    </div>
    </>
  );
};

export default About;
