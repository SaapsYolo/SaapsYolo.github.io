import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-me-section" id='Contact-me'>
      <p>If you would like to get in touch, talk about job
        opportunity, project collaboration, or just to say hi.
        You can reach me in any of these platforms
      </p>

      <div className="socials">
        <div className="email">
          <MdEmail /> <h2>siya.biyo.bongi@gmail.com</h2>
        </div>
        <div className="linkedIn">
          <CiLinkedin /> <h2>Siyabulela Biyo</h2> 
        </div>
        <div className="twitter">
          <FaXTwitter /> <h2>@SaapsYolo</h2>
        </div>
        <div className="gitHub">
          <FaGithub /> <h2>SaapsYolo</h2>
        </div>

      </div>

    </div>
  )
}

export default Contact