import React from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import TotalUser from './pages/TotalUser';
import BlogCreate from './pages/BlogCreate';
import './App.css';
import BlogShow from './pages/BlogShow';
import UpdateProfile from './pages/UpdateProfile';
import Resources from './pages/Resources';
import OtherProfile from './pages/OtherProfile';
import ShowFriend from './pages/ShowFriend';

function App() {
    return (
        <>
        <Navbar/>
        
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/profile">
            <Profile />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
        <Route path="/resources">
            <Resources />
        </Route>
        <Route path="/totaluser">
            <TotalUser />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/blogshow">
            <BlogShow />
        </Route>
        <Route path="/blogcreate">
            <BlogCreate />
        </Route>
        <Route path="/updateprofile">
            <UpdateProfile />
        </Route>
        <Route path="/otherprofile">
            <OtherProfile />
        </Route>
        <Route path="/showfriend">
            <ShowFriend />
        </Route>
        
        </>
    )
}

export default App;
