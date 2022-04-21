import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/projects">projects</NavLink></li>
            <li><NavLink to="/resume">resume</NavLink></li>
        </ul>
    );
}

export default NavBar;