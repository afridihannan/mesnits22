import React from 'react'
import { Members } from './Members'
import './style.css'

function Team() {
  return (
    <div className='team' id='navigateteam' >
      <div className="team_l"></div>
        <div className="team_header">
            Our Team
        </div>
        <div className="team_mem">
          { Members.map(function(props){
            return(
              <div className='ind_mem'>
                <div className="mem_img"> <img src={ require(`../../Assets/${props.photo}.png`) } alt="" />  </div>
                <div className="mem_cont">
                  <div className="mem_name"> {props.name} </div>
                  <div className="mem_desig"> {props.desig} </div>
                </div>
              </div>
            )
          }) }
        </div>
    </div>
  )
}

export default Team