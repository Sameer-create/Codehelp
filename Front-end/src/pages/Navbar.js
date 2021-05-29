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
                <NavLink to="/resources" className="nav__link">Resources</NavLink>
                <NavLink to="/totaluser" className="nav__link">TotalUser</NavLink>
                <NavLink to="/profile" className="nav__link">Profile</NavLink>
                <NavLink to="/contact" className="nav__link">Contact</NavLink>
                <NavLink to="/blogshow" className="nav__link">Blogs</NavLink>
            </nav>
        </header>
    </div>
        </div>
        );
    }
}
export default Navbar