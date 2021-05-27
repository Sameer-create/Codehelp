import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const BlogShow = () => {

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
            <div>
                <h2 class="blogtitle" >{o.blogTitle}</h2>
                <p >By  <p class="blogname" > {o.blogName}</p></p>  
                <p class="blogsnippet" >{o.blogSnippet}</p>
                <p class="blogbody">{o.blogBody}</p>
                <hr></hr>
                
                
            </div>
        );
    });
    
    

    return (
        <div className="container">
            <form method="GET">
            <hr />
            <h2>Blogs</h2>
        
           <Button  variant="contained"className="writeblogclass" color="primary">
                        <NavLink to="/blogcreate" className="nav__link writeblog">Write Blog</NavLink>
                      </Button>
            <div>
                {Blogs}
            </div>
           

        </form>   
        </div>
    )

}



export default BlogShow