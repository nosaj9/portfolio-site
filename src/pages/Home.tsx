import React from "react"
import "./style.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <br/>
            <div className="introcontainer">
                <div>
                    <h1>Hi, I'm Jason!</h1>
                    <h2>I'm a student, singer, and aspiring software engineer.</h2>
                    <p>
                        Feel free to look around and contact me <a href="mailto:jwangd8@gmail.com" target="_blank" rel="noreferrer">here</a>!
                        <br/><span className="highlight">Quick Links:</span>
                    </p>
                </div>
                <div>
                    <NavLink to="/about"><img className="me" src={require("../files/headshot.jpg")} alt="me"/></NavLink>
                </div>
            </div>

            <div className="imagecontainer">
                <NavLink to="/projects"><img className="pokemon" src={require("../files/pkfanclub.png")} alt="pokemon fan club"/></NavLink>
                <NavLink to="acappella"><img className="dacadence" src={require("../files/dafam.jpg")} alt="dacadence"/></NavLink>
            </div>
        </div>
    )
}

export default Home;