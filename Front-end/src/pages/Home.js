import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (
        <div>
            
            <div className="main-grid">
        <header>
        <nav className="nav">
            
        </nav>
        </header>

        <main>
            <h1 className="title">CodeHelp</h1>
            <p className="location">Snitcher Tool</p>
            <a href="https://leetcode.com/" target="_blank">
            <img src="assests/img/lc.jfif" alt="" className="secondary-image"/>
            </a>
            <div className="secondary-images">
                <a href="https://codeforces.com/" target="_blank">
                <img src="assests/img/cf.jfif" alt="" className="secondary-image"/>
                </a>
            </div>
            <div className="secondary-images">
            <a href="https://www.codechef.com/" target="_blank">
                <img src="assests/img/cc.jfif" alt="" className="secondary-image"/>
                </a>
            </div>
            <p className="description">With the help of this tool you'll get notifications of the contest or event of the platform you choose.</p>
            <NavLink className="btn" to="/signup">Start Now</NavLink>
            <br></br>
        </main>
    </div>
        </div>
        );
    }
}
export default Home