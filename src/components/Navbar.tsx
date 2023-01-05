import { NavLink } from "react-router-dom";
import "./Navbar.scss"

export default function Navbar() {
    const activeLink = "active";
    const normalLink = "normal";

    return (
        <nav className="navbar">
            <div className="option">
                <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Home</NavLink>
            </div>

            <div className="option">
                <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>About</NavLink>
            </div>

            <div className="option">
                <NavLink to="/projects" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Projects</NavLink>
            </div>

            <div className="option">
                <NavLink to="/acappella" className={({ isActive }) => (isActive ? activeLink : normalLink)}>Acappella</NavLink>
            </div>
        </nav>
    )
}