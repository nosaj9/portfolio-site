import React from "react"
import "./style.scss";

const Home = () => {
    return (
        <div className="Home">
            <img src={require("../files/headshot.jpg")} alt="me"/>
            <h1>Hi, I'm Jason!</h1>
            <h2>I'm a student, singer, and aspiring software engineer.</h2>
            <p>Feel free to look around and <a href="mailto:jwangd8@gmail.com" target="_blank" rel="noreferrer">contact me!</a></p>
        </div>
    )
}

export default Home;