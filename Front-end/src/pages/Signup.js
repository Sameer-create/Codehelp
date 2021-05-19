import React,{ useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useHistory } from 'react-router-dom';

const Signup = () => {
        const history = useHistory();

        const[user, setUser] = useState({
            name:"",email:"",phone:"",Password:"",cPassword:""
        });

        let name, value;
       const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
       } 

       const postData = async(e) =>{
            e.preventDefault();

            const { name, email, phone, Password, cPassword} = user;

            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name, email, phone, Password, cPassword
                })
            });
            const data = await res.json();
            if(res.status === 422 || !data){
                window.alert("Invailid Registration");
                console.log("Invailid Registration");
            }else{
                window.alert("Registration Successful");
                console.log("Registration Successfull");
                history.push('/login');
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
                <input type="text" class="form-control item" name="name" id="username"
                value={user.name}
                onChange={handleInputs}
                placeholder="Your Name"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" name="email" id="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Email"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" name="phone" id="phone-number"
                value={user.phone}
                onChange={handleInputs}
                placeholder="Mobile Number"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" name="Password" id="password"
                value={user.Password}
                onChange={handleInputs}
                placeholder="Password"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" name="cPassword" id="cpassword"
                value={user.cPassword}
                onChange={handleInputs}
                placeholder="Confirm Password"/>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-block create-account" onClick={postData}>Create Account</button>
            </div>
            <div class="form-group">
                <NavLink to="/login" className="nav__link1">Already have an Account?</NavLink>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Signup
