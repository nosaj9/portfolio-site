import React, { ReactElement } from "react"
import { IconType } from "react-icons"
import "./Button.scss"

const Button = (
    {
        text,
        icon,
        link,
    }: {
        text: string
        link: string
        icon: ReactElement<IconType>
    }) => {

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <span className="linktext">{text}</span> <span className="linkicon">{icon}</span>
        </a>
    )
}

export default Button