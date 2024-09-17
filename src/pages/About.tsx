import { NavLink } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5"
import Button from "../components/Button"
import "./style.scss";

const About = () => {
    return (
        <div className="About">
            <br/>
            <h1>A little bit about me..</h1>
            <p>
                I'm a <span className="highlight">computer science</span> major on the machine learning track studying at the University of Maryland, College Park. I'm also pursuing a minor in <span className="highlight">statistics</span>. I was also previously and now graduated from the Advanced Cybersecurity Experience for Students (<a href="https://aces.umd.edu" target="_blank" rel="noreferrer" className="pagelink">ACES</a>) Program at UMD. 
                After graduating, I hope to be a <span className="highlight">software engineer</span>!
            </p>

            <p>
                During my free time, I like to sing, play piano (mostly movie/video game soundtracks), watch DC Comics cartoons, and hangout with my dog Brooke. 
            </p>

            <p>
                If you have any questions, advice, or just want to chat, please <a href="mailto:jwangd8@gmail.com" target="_blank" rel="noreferrer" className="pagelink">reach out</a>! I'm always open to having a nice conversation!
            </p>

            <br/>
            <div className="LinkButton">
                <Button text="View resume" link="Jason_Wang_Resume.pdf" icon={<IoDocumentTextOutline />} />
            </div>
        </div>
    )
}

export default About;