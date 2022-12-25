import React from "react";
import "./styles.css";
import img2 from "../../Assets/image2.png";

function About() {
  return (
    <div className="about_us">
      <div className="about">
        <div className="about_us_img">
          <img src={img2} alt="img" />
        </div>
        <div className="about_us_context">
          <div className="about_us_">
            <div className="about_us_header">About us</div>
            <div className="about_us_para">
              <p>
                The Department of Mechanical Engineering in NIT Silchar is one
                of the oldest and finest Departments in the entire region. The
                Mechanical Engineering Society (MES), NIT Silchar is the
                official branch society of the department that aims to fulfil
                the technical, social and cultural needs of the students. MES
                conducts various events, workshops, webinars, mock tests and
                other activities for the welfare of the students and strives to
                make this learning experience a healthy and enjoyable one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
