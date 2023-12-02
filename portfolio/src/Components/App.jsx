import React from 'react'
import './AppStyle.css'
import MyImage from '../Components/Assets/selfie.jpg'
import Nav from './Nav'
import About  from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Underline from './Underline'
import Grid from '../Components/Assets/grid.jpg'


const App = () => {
  return (
    <div className="container">
      <Nav/>
      <About/>
      <Projects/>
      <ContactMe/>
    </div>
    
    )
}

export default App