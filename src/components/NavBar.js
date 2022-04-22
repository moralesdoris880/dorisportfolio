import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <ul id="navbar">
            <li className="navlinks"><NavLink to="/">home</NavLink></li>
            <li className="navlinks"><NavLink to="/about">about</NavLink></li>
            <li className="navlinks"><NavLink to="/projects">projects</NavLink></li>
            <li className="navlinks"><NavLink to="/resume">resume</NavLink></li>
        </ul>
    );
}

export default NavBar;