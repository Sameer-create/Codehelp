import React, { useState, useEffect } from 'react'


const TotalUser = () => {

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


    useEffect(() => {
        gettotaluser();
    }, []);


    const Name = list.map((o)=>{
        return(
            <div>
                <p>{o.name}</p><hr/>
            </div>
        );
    });
    const Email = list.map((o)=>{
        return(
            <div>
                <p>{o.email}</p><hr/>
            </div>
        );
    });
    const Phone = list.map((o)=>{
        return(
            <div>
                <p>{o.phone}</p><hr/>
            </div>
        );
    });
    const AddFriend = list.map((o)=>{
        return(
        <div>
            <form method="PATCH">
            <p><button className="button1" onClick={(e)=>postData(e,o.name,o._id)}>Add Friend</button></p><hr/>
            </form>
        </div>
        );
    });
    

    return (
        <div className="container">
            <form method="GET">
            <hr />
            <h2>Total-Users</h2>

            <table id="customers">
        <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Add Friends</th>
        </tr>
        <tr>
            <td>{Name}</td>
            <td>{Email}</td>
            <td>{Phone}</td>
            <td>{AddFriend}</td>
        </tr>
        </table>

        </form>   
        </div>
    )

}

export default TotalUser