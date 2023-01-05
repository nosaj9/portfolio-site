
import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from "react-icons/io5"

import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="icons">
                <a href="https://github.com/nosaj9/">
                    <IoLogoGithub />
                </a>

                <a href="https://www.linkedin.com/in/jason-d-wang/">
                    <IoLogoLinkedin />
                </a>

                <a href="mailto:jwangd8@gmail.com">
                    <IoMail />
                </a>
            </div>

            <p>Copyright © 2023 — All Rights Reserved</p>
        </footer>
    )
}