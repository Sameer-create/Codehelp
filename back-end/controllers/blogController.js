const Blog= require('../model/blogSchema')

const blog_create= async (req,res)=>{
   
  
    const blog= new Blog(req.body);
    const{ blogTitle,blogSnippet, blogBody, blogName}= req.body;
    if (!blogTitle ||!blogSnippet|| !blogBody) {
        return res.status(422).json({ error: "please fill all the fields properly" });
    }
    try{
         blog.blogName=userLogin.name;
        const result=  await  blog.save();
       res.status(201).json({message:"redircetd on blogs page"})
     console.log('blog createed suceessfully')
    
    }catch(e){
        console.log(e);
    }
}


const blog_show = async (req,res)=>{
   
    const blog= await   Blog.find()
   res.status(200).send(blog)
  console.log('total user page run successfully')
  
   
}

module.exports={
    blog_create,
    blog_show
}