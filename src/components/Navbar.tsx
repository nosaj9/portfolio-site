import { NavLink } from "react-router-dom";
import "./Navbar.scss"

export default function Navbar() {
    const activeLink = "active option";
    const normalLink = "normal option";

    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Home</NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>About</NavLink>

            <NavLink to="/projects" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Projects</NavLink>

            <NavLink to="/acappella" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Acappella</NavLink>
        </nav>
    )
}