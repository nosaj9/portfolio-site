import { NavLink } from "react-router-dom";
import "./Navbar.scss"

export default function Navbar() {
    const activeLink = "bg-blue-100 text-black";
    const normalLink = "";

    return (
        <nav className="navbar">
            <div className="option">
                <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Home
                </NavLink>
            </div>

            <div className="option">
                <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                About
                </NavLink>
            </div>
        </nav>
    )
}