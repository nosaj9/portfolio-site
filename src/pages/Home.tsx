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
                    <h3>Hi! I'm a student, singer, and aspiring software engineer.</h3>
                    <p>
                        Feel free to look around and contact me at <a href="mailto:jwangd8@gmail.com" target="_blank" rel="noreferrer">jwangd8@gmail.com</a>
                        <br/><small><span className="highlight">Quick Links:</span></small>
                    </p>
                </div>
                <div>
                    <NavLink to="/about"><img className="me" src="img/headshot.jpg" alt="me"/></NavLink>
                </div>
            </div>

            <div className="imagecontainer">
                <NavLink to="/projects"><img className="pokemon" src="img/pkfanclub.png" alt="pokemon fan club"/></NavLink>
                <NavLink to="/acappella"><img className="dacadence" src="img/dafam.jpg" alt="dacadence"/></NavLink>
            </div>
        </div>
    )
}

export default Home;