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
         
   const user_login= await User.findById(userLogin._id)
  
  
      try{
        var  otherUser= await User.findById(_id)
       let a= 0;
      for(i=0;i<user_login.myFriends.length;i++)
      {
          if(user_login.myFriends[i]===otherUser.userName)
              {
                  a=1;
                  break;
              }
        
      }
        res.status(200).json({otherUser,a});
        
       
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