import React from "react";
import "./styles.css";
import icrame1 from '../../Assets/icrame1.png'

function Icrame() {
  return (
    <div className="icrame">
      {/* <div className="icrame_lining"></div> */}
      <div className="icrame_nd">
        <div className="icrame_content">
            <div className="icrame_head">Icrame</div>
            <div className="icrame_para">
                <p> The Department of Mechanical Engineering organized the International Conference on Recent Advancements in Mechanical Engineering (ICRAME) for two consecutive years, i.e. ICRAME-2020 and ICRAME-2021. It was held from 7th to 9th February in both the years. The conference aims to bring together experts from academic, scientific and industrial communities to address new challenges, present their latest research findings, ideas, developments and perspective of the future directions in the field of Mechanical Engineering. ICRAME-2020 had Dr Youngshik Kim (Hanbat National University, South Korea), Prof. B.V. Reddy (Ontario Tech University, Canada) Prof. G. Biswas (IIT Kanpur), Emeritus Prof. P.K. Mishra (IIT Kharagpur), Prof. G. Sutradhar (NIT Manipur) as the keynote speakers, while ICRAME-2021 had Prof. Partha P. Mukherjee (Purdue University, West Lafayette, Indiana), Prof. Tangali S. Sudarshan (South Carolina University, Columbia), Prof. Sri Bandyopadhyay (UNSW Sydney, Australia), Prof. Neven Duic (University of Zagreb, Croatia) as the speakers. </p>
            </div>
        </div>
        <div className="icrame_bg_img"> <img src={icrame1} alt="" /> </div>
      </div>
    </div>
  );
}

export default Icrame;
