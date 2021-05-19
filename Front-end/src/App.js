import React from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import TotalUser from './pages/TotalUser';
import './App.css';

function App() {
    return (
        <>
        <Navbar/>
        
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
        <Route path="/totaluser">
            <TotalUser />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        
        </>
    )
}

export default App;
