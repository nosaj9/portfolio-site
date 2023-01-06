import { NavLink } from "react-router-dom";
import "./Navbar.scss"

export default function Navbar() {
    const activeLink = "active option";
    const normalLink = "normal option";

    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>HOME</NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>ABOUT ME</NavLink>

            <NavLink to="/projects" className={({ isActive }) => (isActive ? activeLink : normalLink)}>PROJECTS</NavLink>

            <NavLink to="/acappella" className={({ isActive }) => (isActive ? activeLink : normalLink)}>ACAPPELLA</NavLink>
        </nav>
    )
}