import { Link } from "react-router-dom";
import "./Navbar.scss"

export default function Navbar() {
    return (
        <nav>
            <h1>Navbar component</h1>
            <Link to="/about">
            <button>About</button>
            </Link>
        </nav>
    )
}