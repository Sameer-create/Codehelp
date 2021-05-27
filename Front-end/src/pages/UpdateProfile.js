import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
 

function UpdateProfile() {

    const history = useHistory();

    const[userData, setUserData] = useState({});


    const getuserinfo = async () => {
        try{
            const res = await fetch('/updateprofile',{
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
        }

    }

    const[user, setUser] = useState({
        name:"",email:"",Password:""
    });
    
    let name, value;
    const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    
    setUser({...user, [name]:value});
    }


    const putData = async(e) =>{
        e.preventDefault();

        const { name, email, Password} = user;

        const res = await fetch("/updateprofile", {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, Password
            })
        });
        if(res.status === 422){
            window.alert("Invailid credentials");
            console.log("Invailid credentials");
        }else{
            console.log("Profile Updated Successful");
            history.push('/profile');
        }    
   }

   useEffect(() => {
    getuserinfo();
    }, []);

    return (
        <div>
            <h2>UpdateProfile</h2><hr/>
            <div class="registration-form">
        <form method="PUT">
                <h2 class="update-heading">Update profile</h2>
            <div class="form-group">
                <input type="text" class="form-control item" name="name" id="username"
                value={user.name}
                onChange={handleInputs}
                placeholder={userData.name}/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" name="email" id="email"
                value={user.email}
                onChange={handleInputs}
                placeholder={userData.email}/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control item" name="Password" id="password"
                placeholder={userData.Password}/>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-block create-account" onClick={putData}>Update Profile</button>
            </div>
        </form>
        </div>
        </div>
    )
}

export default UpdateProfile
