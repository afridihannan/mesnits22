import React from "react";
import "./style.css";
import Hannan from "../../Assets/hannan.png";
import { Peps } from "./People";

function Podcast() {
  return (
    <div className="podcast__">
      <div className="pod_part">
        <div className="pod_Context">
          <div className="p_head">
            <div className="p_headline">THE VARIETY PODCAST</div>
          </div>
          <div className="p_cont">
            MES organises the Variety Podcast, inviting one Guest every month
            from various domains related to Mechanical Engineering to talk about
            their respective fields and give the students an insight into the
            careers available after B.Tech in Mechanical Engineering. Our guests
            include Alumni, reputed and eminent personalities, Professors and of
            course Engineers. The Variety Podcast is an exciting venture, for it
            aims to help us understand and learn about the current requirements
            of the Industry, skills that ought to be learnt, real-life
            experiences of our guests and most importantly gives us expert
            guidance that is very difficult to come across.
          </div>
        </div>
        <div className="pod_images">
          <div className="p_head">
            <div className="p_headline">DISTINGUISHED GUESTS</div>
          </div>
          <div className="people_">
            {Peps.map(function(props){
              return(
                <div className="people_1">
              <div className="pep_img">
                <img src={ require(`../../Assets/${props.photo}.png`)} alt="Guest Image" />
              </div>
              <div className="pep_name">
                <div>{props.name}</div>
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Podcast;
