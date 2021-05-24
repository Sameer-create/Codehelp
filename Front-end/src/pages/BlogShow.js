import React, { useState, useEffect } from 'react'


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
                <h3>{o.blogTitle}</h3><hr/>
                <p>{o.blogSnippet}</p><hr/>
                <p>{o.blogBody}</p>
                <p>{o.blogName}</p>
            </div>
        );
    });
    
    

    return (
        <div className="container">
            <form method="GET">
            <hr />
            <h2>Blogs</h2>
            <a href='/blogcreate'>Write Blog</a>
            <div>
                {Blogs}
            </div>
           

        </form>   
        </div>
    )

}

export default BlogShow