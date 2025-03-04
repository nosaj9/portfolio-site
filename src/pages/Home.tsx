import React from "react"
import "./style.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <br/>
            <div className="introcontainer">
                <div>
                    <h1>Jason Wang</h1>
                    <h3>Hello there! I'm a student, singer, and aspiring software engineer.</h3>
                    <p>
                        I've had a lot of software engineering experience in my internships from small consulting firms to Fortune 1.
                    </p>
                    <p>
                        I make a bunch of random things from websites to Minecraft plugins. I like to sing, play piano, read, and play the occasional game of League :3
                    </p>
                    <p>
                        Feel free to look around and contact me at <a href="mailto:jwangd8@gmail.com" target="_blank" rel="noreferrer">jwangd8@gmail.com</a>
                    </p>
                </div>
                <div>
                    <NavLink to="/about"><img className="me" src={`${process.env.PUBLIC_URL}/img/headshot.jpg`} alt="me"/></NavLink>
                </div>
            </div>
            <div className="highlight quickLinks">Quick Links:</div>
            {/* <div className="imagecontainer">
                <NavLink to="/projects"><img className="pokemon" src={`${process.env.PUBLIC_URL}/img/pkfanclub.png`} alt="pokemon fan club"/></NavLink>
                <NavLink to="/acappella"><img className="dacadence" src={`${process.env.PUBLIC_URL}/img/dafam.jpg`} alt="dacadence"/></NavLink>
            </div> */}
            <ul>
                <li><a href={`${process.env.PUBLIC_URL}/Jason_Wang_Resume.pdf`} target="_blank" rel="noreferrer">Resume</a></li>
                <li><a href="https://www.linkedin.com/in/jason-d-wang/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/nosaj9" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
        </div>
    )
}

export default Home;