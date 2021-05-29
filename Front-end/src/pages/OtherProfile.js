import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import {otherUser} from './TotalUser';


const OtherProfile = () =>{
    
  
  const[button, setButton] = useState();
    
  const callAboutPage = async () => {
        if(otherUser.a===1){
          setButton('Unfollow');
        }
        else{
          setButton('Follow');
        }
    }
       
    const postData = async(e,username) =>{
      e.preventDefault();
      console.log(username);
      
      if(button==='Follow'){
        const name  = username;
        const res = await fetch('/addfriend',{
          method: "PATCH",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
              name
          })
      });
      
      console.log(res);
      if(!res.status === 200){
          console.log("Name not sent");
      }else{
          console.log("Name sent successfully");
      }
    }
     if(button==='Unfollow'){
       const name  = username;
        const res = await fetch('/removefriend',{
          method: "PATCH",
          headers: {
              "Content-Type" : "application/json"
          },
          body: JSON.stringify({
              name
          })
      });
      
      console.log(res);
      if(!res.status === 200){
          console.log("Name not sent");
      }else{
          console.log("Name sent successfully");
      }
     } 
      
  }

    useEffect(() => {
        callAboutPage();
    },[]);

    console.log(otherUser);
    return (
      <>
      <div className="profile-container">
 <div className="col-md-12">  
    <div className="col-md-4">      
        <div className="portlet light profile-sidebar-portlet bordered">
            <div className="profile-userpic">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-responsive" alt=""/> </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-name profile-text"> {otherUser.otherUser.name} </div>
                
            </div>
        </div>
    </div>


    <div className="col-md-8"> 
                    <div className="bloc-tabs">
                      <form method="PATCH">
                      <Button variant="contained" color="primary" onClick={(e)=>postData(e, otherUser.otherUser.userName)}>
                        {button}
                      </Button>
                      </form>
                    </div>
                    <br/><br/>
                    <div className="content-tabs">
                      <div>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary profile-text">{otherUser.otherUser.name}</div>
                  </div>
                  <hr className="profile-text"/>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary profile-text">
                    {otherUser.otherUser.email}
                    </div>
                  </div>
                  <hr className="profile-text"/>


                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="profile-text">My Friends</h6>
                    </div>
                    <div className="col-sm-9 text-secondary profile-text">
                      {otherUser.otherUser.myFriendsCount}
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