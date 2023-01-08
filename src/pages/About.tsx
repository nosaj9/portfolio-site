import { NavLink } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5"
import Button from "../components/Button"
import "./style.scss";

const About = () => {
    return (
        <div className="About">

            <h1>A little bit about me..</h1>
            <p>
                I'm a <span className="highlight">computer science</span> major studying at the University of Maryland, College Park where I'm also currently part
                of the Advanced Cybersecurity Experience for Students (ACES) Program. 
                After graduating, I hope to be a <span className="highlight">software engineer</span>!
            </p>

            <p>
                During my free time, I like to sing, play piano (mostly movie/video game soundtracks), watch DC Comics cartoons, and hangout with my dog Brooke. 
            </p>

            <p>
                If you have any questions, advice, or just want to chat, please <a href="mailto:jwangd8@gmail.com" target="_blank" className="pagelink">reach out</a>! I'm always open to learning new things and exploring ways to grow.
            </p>

            {/* <div>
                <a href="file:///C:\Users\jdcom\Downloads\Jason_Wang_Resume-1.pdf" target="_blank" className="pagelink">View my resume <IoDocumentTextOutline /></a>
            </div> */}
            <br/>
            <div className="LinkButton">
                <Button text="View resume" link="Jason_Wang_Resume.pdf" icon={<IoDocumentTextOutline />} />
            </div>
        </div>
    )
}

export default About;