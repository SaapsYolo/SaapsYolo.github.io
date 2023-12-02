import React from 'react'
import Project1Img from '../Components/Assets/Screenshot (201).png'

const Projects = () => {
  return (
    <div className="projects" id='Projects'> 
        <div className="my-projects">
            <h1>My Projects</h1>
        </div>

        <div className="project-name">
            <h2>YummyCuisin (2023)</h2>
            <h3><a href=""><i>Click Here</i></a>  for more info about this project</h3>
            <img src={Project1Img} alt="" />
            
        </div>
    </div>
    )
}

export default Projects