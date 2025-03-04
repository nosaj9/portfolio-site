import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from "react-icons/io5"

import "./Footer.scss"

export default function Footer() {
    return (
        <footer>
            {/* <hr></hr>
            <br></br> */}
            <div className="icons">
                <a href="mailto:jwangd8@gmail.com" target="_blank" rel="noreferrer">
                    <IoMail />
                </a>

                <a href="https://www.linkedin.com/in/jason-d-wang/" target="_blank" rel="noreferrer">
                    <IoLogoLinkedin />
                </a>

                <a href="https://github.com/nosaj9/" target="_blank" rel="noreferrer">
                    <IoLogoGithub />
                </a>
            </div>

            <p id="landscapefooter">© 2025 Jason Wang - All Rights Reserved | Built with React and Typescript</p>
            <p id="portraitfooter">© 2025 Jason Wang - All Rights Reserved <br/> Built with React and Typescript</p>
        </footer>
    )
}