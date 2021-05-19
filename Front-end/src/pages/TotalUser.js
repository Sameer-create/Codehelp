import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom';

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



    useEffect(() => {
        gettotaluser();
    }, []);

    const listitem = list.map((o)=>{
        return(
            <div>
                <p>{o.name}</p>
                <p>{o.email}</p>
                <p>{o.phone}</p>
                <hr/>
            </div>
        );
    });

    return (
        <div className="container">
            <form method="GET">
            <hr />
            <h2>Total-Users</h2>
            {listitem}
            </form>
            
        </div>
    )

}

export default TotalUser