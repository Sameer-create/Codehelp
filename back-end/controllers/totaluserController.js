const User = require('../model/userSchema');

const total_user= async (req,res)=>{
   

    const user= await   User.find().sort({myFriendsCount:-1})
   res.send(user)
 

 
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
              },
          }
          )
          var  count =userLogin.myFriends.length +1;
          console.log(count)
           await User.findByIdAndUpdate(userLogin,{
            // pushing into user databse 
            $set:{
                myFriendsCount:count
            },
        }
        )
            
        
        

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

  const other_profile= async (req,res)=>{
      const   {_id} = req.body;
      try{
        const user= await User.findById(_id)
       
        res.status(200).send(user);
        
        console.log(user);
    }catch(e){console.log(e)}
  }
   

  const remove_friend =async(req, res) => {

    const {name}= req.body; 
       
    if(userLogin)
    {
      try{
          const result =  await User.findByIdAndUpdate(userLogin,{
              // pushing into user databse 
              $pull:{
                  myFriends:name
              },
          }
          )
          var  count =userLogin.myFriends.length +1;
          console.log(count)
           await User.findByIdAndUpdate(userLogin,{
            // pushing into user databse 
            $set:{
                myFriendsCount:count
            },
        }
        )
            
        
        

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
     add_friend,
     other_profile,
     remove_friend,
    
 }