import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


const Profile = () =>{
    const history = useHistory();

    const[userData, setUserData] = useState({});
    
    const callAboutPage = async () => {
        try{
            const res = await fetch('/profile',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            setUserData(data);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
            history.push('/login');
        }
    }

    useEffect(() => {
        callAboutPage();
    },[]);

    

    return (
      <>
        <div class="container emp-profile">
            <form method="GET">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img mt-4 mb-2">
                            <img src="https://static.thenounproject.com/png/630740-200.png" alt=""/><hr/>
                            <div class="file btn">
                                {userData.name}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        {userData.name} 
                                    </h5>
                                    <h6>
                                        Welcome to your Profile
                                    </h6>
                                    <p class="proile-rating mt-3 mb-5">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" role="tablist" id="myTab">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">Basic Info</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Friends</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                            <a href="">Website Link</a><br/>
                            <a href="">Bootsnipp Profile</a><br/>
                            <a href="">Bootply Profile</a>
                            <p>SKILLS</p>
                            <a href="">Web Designer</a><br/>
                            <a href="">Web Developer</a><br/>
                            <a href="">WordPress</a><br/>
                            <a href="">WooCommerce</a><br/>
                            <a href="">PHP, .Net</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8 pl-5 about-info">
                        <div class="tab-content profile-tab">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>User Id</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData._id}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Name</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData.name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Email</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Phone</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData.phone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Registration</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Done</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Experience</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData.name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Hourly Rate</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData.name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Total Projects</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData.name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>English Level</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData.name}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Availability</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{userData.name}</p>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </>

    )
    
}

export default Profile