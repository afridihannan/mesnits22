import React from 'react'
import './style.css'
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className='contact' id='contact__us'>
        <div className="con_contxt">
            <div className="con_heading">CONNECT WITH  US</div>
            <div className="socials">
                <a href='https://www.facebook.com/mesnits' className="facebook"><FaFacebook/></a>
                <a href='https://www.linkedin.com/company/mes-nit-silchar/' className="linkedin"><FaLinkedin/></a>
                <a href='https://youtube.com/@mesnits5034' className="utube"><FaYoutube/></a> 
            </div>
        </div>
    </div>
  )
}

export default Contact