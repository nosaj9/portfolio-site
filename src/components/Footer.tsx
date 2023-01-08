import {
    IoLogoGithub,
    IoLogoLinkedin,
    IoMail
} from "react-icons/io5"

import "./Footer.scss"

export default function Footer() {
    return (
        <footer>
            <div className="icons">
                <a href="https://github.com/nosaj9/" target="_blank" rel="noreferrer">
                    <IoLogoGithub />
                </a>

                <a href="https://www.linkedin.com/in/jason-d-wang/" target="_blank" rel="noreferrer">
                    <IoLogoLinkedin />
                </a>

                <a href="mailto:jwangd8@gmail.com" target="_blank" rel="noreferrer">
                    <IoMail />
                </a>
            </div>

            <p>Copyright © 2023 — All Rights Reserved</p>
        </footer>
    )
}