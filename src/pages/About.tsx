import { NavLink } from "react-router-dom";
import "./style.scss";

const About = () => {
    return (
        <div className="About">
            <h2>A little bit about me..</h2>
            <p>
                Hi, I'm Jason! I'm a <span className="highlight">computer science</span> major studying at the University of Maryland, College Park where I'm also currently part
                of the Advanced Cybersecurity Experience for Students (ACES) Program. I'm also part of an <span className="highlight">acappella group</span> called Dacadence, more on that under the <NavLink to="/acappella" className="pagelink">Acappella</NavLink> tab.
                After graduating, I hope to be a <span className="highlight">software engineer</span>!
            </p>

            <p>
                During my free time, I like to sing, play piano (mostly movie/video game soundtracks), watch DC Comics cartoons, and hangout with my dog Brooke. 
            </p>

            <p>
                If you have any questions, advice, resources, or just want to chat, please reach out below! I'm always open to learning new things and exploring ways to grow. 
                Contact me below: 
            </p>
        </div>
    )
}

export default About;