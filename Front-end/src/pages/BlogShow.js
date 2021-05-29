import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
const BlogShow = () => {
    const history = useHistory();
    const [list, setList] = useState([]);


    const getallblogs = async () => {
        try{
            const res = await fetch('/allblogs',{
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
        getallblogs();
    }, []);


    const Blogs = list.map((o)=>{
        return(
            <div class="blogshow">
                <h4 class="blogtitle" ><b>{o.blogTitle}</b>: {o.blogSnippet}</h4>
                <hr/>
                <p class="blogname" ><b>By {o.blogName}</b></p>
                <p class="blogbody">{o.blogBody}</p>
                <hr></hr>
                
                
            </div>
        );
    });
    
    
const writeblog = ()=>{
    history.replace("/blogcreate");
}
    return (
        <div className="container">
            <form method="GET">
            <hr />
            <div className="flexbox"> 
            <h2 className="flex">Blogs</h2>
        <div className="button"><Button  onClick={writeblog} variant="contained" className="writeblogclass" color="primary">
                     Write Blog
                   </Button></div>
        
            </div>
           
            <div>
                {Blogs}
            </div>
           

        </form>   
        </div>
        
    )

}



export default BlogShow