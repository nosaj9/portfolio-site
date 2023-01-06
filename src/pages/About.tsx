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
                During my free time, I like to 
            </p>
        </div>
    )
}

export default About;