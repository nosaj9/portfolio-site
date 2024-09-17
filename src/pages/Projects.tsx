import React from "react"
import "./style.scss";
import Button from "../components/Button"
import { IoDocumentTextOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom";

import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from "react-icons/io5"

const Projects = () => {
    return (
        <div className="Projects">
            <br/>
            <h1>My work</h1>

            <p>This section is for my personal projects. If you want to learn more about my internship experiences, check out my resume below:</p>
            <div className="LinkButton">
                <Button text="View resume" link="Jason_Wang_Resume.pdf" icon={<IoDocumentTextOutline />} />
            </div>

            <br/>

            <h3>Research Honeypot <a href="https://github.com/BlackrazorS2/HACS200-Research" target="_blank" rel="noreferrer">
                    <IoLogoGithub />
                </a></h3>
            <p>A research project that I conducted with a team of students. Our goal was to attract cyber attackers and study their behavior in real time. </p>

            <h3>Pokemon Fan Club <a href="https://github.com/nosaj9/pokemon-fan-club" target="_blank" rel="noreferrer">
                    <IoLogoGithub />
                </a></h3>
            <p>I've been a huge fan of Pokemon ever since I was a child so I made a website where people can share their love for their favorite Pokemon.</p>

            <h3>Capture The Point <a href="https://github.com/nosaj9/CaptureThePoint" target="_blank" rel="noreferrer">
                    <IoLogoGithub />
                </a></h3>
            <p>A cool Minecraft plugin that I made back when I was the developer for a Minecraft server. It's a King of The Hill style gamemode.</p>
        </div>
    )
}

export default Projects;