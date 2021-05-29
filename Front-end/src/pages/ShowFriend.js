import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom';


var otherUser;
const TotalUser = () => {
    
    const history = useHistory();
        
    const [list, setList] = useState([]);
    const [friend, setFriend] = useState([]);
    const gettotaluser = async () => {
        try{
            const res = await fetch('/showfriend',{
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);
            console.log(data.myFriends);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
            setList(data);
            setFriend(data.myFriends);
        }catch(err){
            console.log(err);
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
        console.log(otherUser);
        
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
            <h2>Total-Friends</h2>

            <table id="customers">
        <tr>
            <th>My Friends</th>
            
        </tr>
        <tr>
                <td>
                    {
                        friend.map((reptile) => <div><p><NavLink  to="/otherprofile" onClick={(e)=>getData(e, reptile._id)} className="nav__link">{reptile}</NavLink></p><hr/></div>)
                    }
                </td>
        </tr>
        </table>
        
        </form>   
        </div>
    )

}

export default TotalUser

export {otherUser};