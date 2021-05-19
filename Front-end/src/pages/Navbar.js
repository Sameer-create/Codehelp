import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return (
        <div>
            
            <div className="main-grid">
        <header>
            
            <nav
             className="nav">
                 <NavLink to="/" className="nav__link">Home</NavLink>
                <NavLink to="/login" className="nav__link">Login</NavLink>
                <NavLink to="/signup" className="nav__link">Sign Up</NavLink>
                <NavLink to="/totaluser" className="nav__link">TotalUser</NavLink>
                <NavLink to="/about" className="nav__link">aboutMe</NavLink>
                <NavLink to="/contact" className="nav__link">Contact</NavLink>
            </nav>
        </header>
    </div>
        </div>
        );
    }
}
export default Navbar