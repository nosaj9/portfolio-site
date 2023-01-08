import React from "react"
import "./style.scss";

const Home = () => {
    return (
        <div className="Home">
            <img src={require("../files/headshot.jpg")} alt="me"/>
            <h1>Hi, I'm Jason!</h1>
            <h2>A student, singer, and aspiring software engineer.</h2>
            <p>You have reached my website. Feel free to look around and contact me below!</p>
        </div>
    )
}

export default Home;