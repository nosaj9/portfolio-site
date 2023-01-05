import "./Main.scss";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Acappella from '../pages/Acappella';

const Main = () => {
    return (
        <div className="Main">
            <Routes> {/* The Switch decides which component to show based on the current URL.*/}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/acappella" element={<Acappella />} />
            </Routes>
        </div>
    );
}

export default Main;