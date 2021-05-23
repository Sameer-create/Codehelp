const User = require('../model/userSchema');

const total_user= async (req,res)=>{
   

    const user= await   User.find().sort({phone:-1})
   res.send(user)
  console.log('total user page run successfully')
 
 
 }

 const add_friend =async(req, res) => {

    const {name}= req.body; 
  
    if(userLogin)
    {
      try{
          const result =  await User.findByIdAndUpdate(userLogin,{
              // pushing into user databse 
              $push:{
                  myFriends:name
              }
          })
          
            res.status(201);
          }catch(e){
              console.log(e);
          }
        
    }
    else
    {
        console.log('user not found')
        res.status(404);
    }
  }
 module.exports={
     total_user,
     add_friend
 }