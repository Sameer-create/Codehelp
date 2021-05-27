import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom';

var  otherUser;
const TotalUser = () => {
    
    const history = useHistory();

    const [list, setList] = useState([]);

    const gettotaluser = async () => {
        try{
            const res = await fetch('/totaluser',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
            setList(data);

        }catch(err){
            console.log(err);
        }

    }
    
    const postData = async(e,username) =>{
        e.preventDefault();
        console.log(username);
        
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

    const getData = async(e,Id) =>{
        e.preventDefault();
        console.log(Id);
        
        const _id  = Id;
        const res = await fetch('/otherprofile',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                _id
            })
        });
        otherUser = await res.json();
        
        
        if(!res.status === 200){
            console.log("Id not sent");
        }else{
            console.log("Id sent successfully");
            history.push('/otherprofile');
        }

    }


    useEffect(() => {
        gettotaluser();
    }, []);
    

    return (
        <div className="container">
            <form method="GET">
            <hr />
            <h2>Total-Users</h2>

            <table id="customers">
        <tr>
            <th>UserName</th>
            <th>Total Friends</th>
            <th>Add Friends</th>
            
        </tr>
        <tr>
                <td>
                    {
                        list.map((o, index)=>(
                        <form method="POST">
                            <p key={index}> <NavLink to="/otherprofile" onClick={(e)=>getData(e, o._id)} className="nav_link">{o.name}</NavLink></p>
                        </form>
                        ))
                    }
                </td>
                <td>
                    {
                        list.map((o, index)=>(
                        <p key={index}>{o.myFriendsCount}</p>
                        ))
                    }
                </td>
                <td>
                    {
                        list.map((o, index)=>(
                            <form method="PATCH">
                                <p key={index}><button className="button1" onClick={(e)=>postData(e, o.userName)}>Add Friend</button></p>
                            </form>
                        ))
                    }
                </td>
        </tr>
        </table>
        
        </form>   
        </div>
    )

}

export default TotalUser
export{otherUser}
