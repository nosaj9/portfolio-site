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
                I'm a <span className="highlight">computer science</span> major on the machine learning track studying at the University of Maryland, College Park. I'm also pursuing a minor in <span className="highlight">statistics</span>. 
                I was also previously in Advanced Cybersecurity Experience for Students (<a href="https://aces.umd.edu" target="_blank" rel="noreferrer" className="pagelink">ACES</a>) Program at UMD, which I completed at the end of my sophomore year. 
                After graduating, I hope to be a <span className="highlight">software engineer</span>!
            </p>

            <p>
                I love making music. Currently, I'm learning "Call of Silence" from <i>Attack on Titan</i> on piano. I'm also in an acappella group here on campus (click the Acappella tab for more)!
                I also enjoy reading, right now I'm on <i>When Breath Becomes Air</i> by Paul Kalanithi. 
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