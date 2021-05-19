import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const loginUser = async (e) =>{
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email, Password
            })
        });

        const data = res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        }else{
            window.alert("Login Success");
            history.push("/about");
        }

    }
   
    return (
        <div>
            <div class="registration-form">
        <form method="POST">
            <div class="form-icon">
                <span><i class="icon icon-user"></i></span>
            </div>
            <div class="form-group">
                <input type="text" name="email" class="form-control item" id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"/>
            </div>
            <div class="form-group">
                <input type="password" name="Password" class="form-control item" id="password" 
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"/>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-block create-account" onClick={loginUser}>Log In</button>
            </div>
            <div class="form-group">
                <NavLink to="/signup" className="nav__link1">Create an Account?</NavLink>
            </div>
        </form>
        </div>
        </div>
    )

}

export default Login
