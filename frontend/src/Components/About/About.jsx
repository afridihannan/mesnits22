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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                sit ea, sunt esse eos dignissimos repellendus quaerat natus
                consequatur ipsum, voluptas ducimus, atque inventore quos itaque
                nemo libero provident ad? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Magnam labore iusto nisi tempore consectetur
                odio, odit reiciendis quod fugiat voluptate quaerat ut sequi
                consequuntur iste sit repellat suscipit voluptatem? Beatae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
