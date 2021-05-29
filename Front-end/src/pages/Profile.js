import React, { useState, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';


const Profile = () =>{
    const history = useHistory();

    const[userData, setUserData] = useState({});
    const[friend, setFriend] = useState([]);
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
            setFriend(data.myFriends);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            console.log(err);
            history.push('/login');
        }
    }
    const[user, setUser] = useState({
      codechef:"", codeforces:""
    });

    let name, value;
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;

    setUser({...user, [name]:value});
    } 

    const patchtData = async(e) =>{
      e.preventDefault();

      const { codechef, codeforces} = user;
    
      const res = await fetch("/ranking", {
          method: "PATCH",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
            codechef, codeforces
          })
      });
      
      if(res.status === 422){
          console.log("Invalid credentials");
      }else{
          console.log("Profile Updated Successful");
      }    
 }

    useEffect(() => {
        callAboutPage();
    },[]);


    return (
      <>
      <div className="profile-container">
 <div className="col-md-12">  
    <div className="col-md-4">      
        <div className="portlet light profile-sidebar-portlet bordered">
            <div className="profile-userpic">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-responsive" alt=""/> </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-name profile-text"> {userData.userName} </div>
                
            </div>
        </div>
    </div>


    <div className="col-md-8"> 
                    <div className="bloc-tabs">
                      <Button variant="contained" color="primary">
                        <NavLink to="/updateprofile" className="nav__link">Edit Profile</NavLink>
                      </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Button variant="contained" color="primary">
                      <NavLink to="/showfriend" className="nav__link">Friends</NavLink>
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


  <div role="tabpanel" className="tab-pane active" >
                            <form>
                              <div className="form-group">
                                <label for="inputName" className="profile-text">Codechef Handle:</label>
                                <input type="text" className="form-control" id="inputName" name="codechef" value={user.codechef}
                                onChange={handleInputs} placeholder="Codechef Handle"/>
                              </div>
                                
                              <div className="form-group">
                                <label for="exampleInputEmail1" className="profile-text">Codeforces Handle:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="codeforces" value={user.codeforces}
                                onChange={handleInputs} placeholder="Codeforces Handle"/>
                              </div>
                              <form method="PATCH">
                              <Button variant="contained" color="primary" onClick={patchtData}>Submit</Button>
                              </form>
                            </form><br/><br/>
                        </div>
                      </div>
              
                    </div>
                  </div>
                  </div>
                  </div>
              
      </>

    )
    
}

export default Profile