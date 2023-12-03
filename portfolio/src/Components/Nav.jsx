import React from 'react'
import About from './About'
import Projects from './Projects'



const Nav = () => {
    
    return (
        <div className="navbar">
            <div className="logo">
                <h1>Siya's Portfolio </h1>
            </div>

            <div className="nav">
                <a href="">Home</a>
                <a href='#About' >About</a>
                <a href='#Projects' >Projects</a>
                <div className="contact-me">
                    <a href="#Contact-me">Contact Me</a>
                </div>
                <div className="toggle_btn">
                    <i class="fa fa-bars"></i>
                </div>
            </div>

            <div className="drop_downmenu">
            <a href="">Home</a>
                <a href='#About' >About</a>
                <a href='#Projects' >Projects</a>
                <div className="contact-me">
                    <a href="#Contact-me">Contact Me</a>
                </div>
            </div>

        </div>

    )
}

export default Nav