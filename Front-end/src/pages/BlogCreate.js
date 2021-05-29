import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';

function BlogCreate() {

    const history = useHistory();

    const [bloguser,setBloguser] = useState({
        blogTitle:"", blogSnippet:"", blogBody:""
    });
    let name, value;
       const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setBloguser({...bloguser, [name]:value});
    }

    const postblog = async(e) =>{
        e.preventDefault();

        const {  blogTitle,blogSnippet,blogBody } = bloguser;

        const res = await fetch("/blogcreate", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                blogTitle, blogSnippet, blogBody
            })
        });
        const data = await res.json();
        if(res.status === 422 || !data){
            window.alert("Fill all the fields");
            console.log("Fill all the fields");
        }else{
            history.push('/blogshow');
        }
   }

    return (
        <div>
            <h2>BlogCreate</h2><hr/>

  <div class="create-blog content">
    <form method="POST">
      <label for="title">Blog title:</label>
      <input type="text" id="title" name="blogTitle" required 
        value={bloguser.blogTitle}
        onChange={handleInputs}
        placeholder="Blog Title"/>
      <label for="snippet">Blog snippet:</label>
      <input type="text" id="snippet" name="blogSnippet" required
      value={bloguser.blogSnippet}
      onChange={handleInputs}
      placeholder="Blog Snippet"/>
      <label for="body">Blog body:</label>
      <textarea id="body" name="blogBody" required 
        value={bloguser.blogBody}
        onChange={handleInputs}
        placeholder="Blog body"></textarea>
      <button onClick={postblog}>Submit</button>
    </form>
    </div>
    </div>
    )
}

export default BlogCreate
