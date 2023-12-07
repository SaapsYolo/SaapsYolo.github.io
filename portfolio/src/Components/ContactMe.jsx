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
        You can reach me in any of these platforms :)
      </p>

      <div className="socials">
        <li>
          <a href="mailto: siya.biyo.bongi@gmail.com"> <MdEmail/></a>
          <a href="https://www.linkedin.com/in/siyabulela-biyo-a50b97206"><CiLinkedin/></a>
          <a href="https://x.com/saapsyolo"><FaXTwitter/></a>
          <a href="https://github.com/saapsyolo"><FaGithub/></a>
        </li>
      </div>

    </div>
  )
}

export default Contact