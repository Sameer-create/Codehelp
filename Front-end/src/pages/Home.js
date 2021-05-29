import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [userData, setUserData] = useState([]);
    const callHome = async () => {
        try {
            const res = await fetch('/contest', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
            setUserData(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        callHome();
    }, []);
    console.log(userData);
    
    const Show = userData.map((o, index)=>{
        return(
            
            

            <div className="col-md-4 col-10 mx-auto">
                    
            <div className="container table " >
            <div className="card text-center">
            <h5 className="card-header">
                <strong key={index}>{o.url}</strong>
            </h5>
            <div className="card-body">
            <h6 className="card-title" key={index}>{o.title}</h6>
                <div>
                <p className="card-text" key={index}>{o.start}</p>
                <p className="card-text" key={index}>{o.end}</p>
                </div>
                <div id="button">
                <a href={o.host} id="button" key={index} className="btn-start-now">{o.host}</a>
                </div>
            </div>
            <div className="card-footer text-muted" key={index}>
                {o.duration}
              </div>
            </div>
            </div>

            </div>
            
        )
    })
    return (
        <>
            <form method="GET">
            <div className="row">
                {Show}
            </div>

            </form>
        </>
    );
}
export default Home