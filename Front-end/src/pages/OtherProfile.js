import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import {otherUser} from './TotalUser';

const OtherProfile = () =>{
  const[userData, setUserData] = useState({});
    setUserData(otherUser);
    

    return (
      <>
      <div className="profile-container">
 <div className="col-md-12">  
    <div className="col-md-4">      
        <div className="portlet light profile-sidebar-portlet bordered">
            <div className="profile-userpic">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-responsive" alt=""/> </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-name profile-text"> {userData.name} </div>
                
            </div>
        </div>
    </div>


    <div className="col-md-8"> 
                    <div className="bloc-tabs">
                    <Button variant="contained" color="primary">
                        Follow
                      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant="contained" color="primary">
                        Friends
                      </Button>
                    </div>
                    <br/><br/>
                    <div className="content-tabs">
                      <div>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary profile-text">{userData.name}</div>
                  </div>
                  <hr className="profile-text"/>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary profile-text">
                    {userData.email}
                    </div>
                  </div>
                  <hr className="profile-text"/>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">My Friends</h6>
                    </div>
                    <div className="col-sm-9 text-secondary profile-text">
                      {userData.myFriendsCount}
                    </div>
                  </div>
                  <hr className="profile-text"></hr>
                  <br/>

                  <div className="center">
                    <h4 className="profile-text">Coding Platform Details</h4>
                  </div>
                  <hr className="profile-text"/>


                  <h5 className="profile-text">Codeforces</h5>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">Handle</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      aryanXX
                    </div>
                    <br/>
                    <div className="col-sm-3">
                      <h6 className="profile-text">Rating</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      980
                    </div>
                  </div>
                  <hr className="profile-text"/>
                  <br/>

                  <h5 className="profile-text">Codechef</h5>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">Handle</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      aryanXX
                    </div>
                    <br/>
                    <div className="col-sm-3">
                      <h6 className="profile-text">Rating</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      1575
                    </div>
                  </div>
                  <hr className="profile-text"></hr>
                  <br/>

                      </div>
              
                      <div>

                      </div>
              
                    </div>
                  </div>
                  </div>
                  </div>
              
      </>

    )
    
}

export default OtherProfile