const User = require('../model/userSchema');

const profile =  (req, res) => {
    res.status(200).send(userLogin);
   console.log('profile page run successfully');
   
}

const user_data= async (req,res)=>{
    res.status(201).send(userLogin);
   
 }
const update_profile= async( req,res)=>{
   const user =userLogin;
if(userLogin)
{
    user.name=userLogin.name;
    user.email=req.body.email||userLogin.email;
    user.Password=req.body.Password;
    user.cPaasword= req.body.Password;
    user.myFriends= userLogin.myFriends;
}
    try{
         userLogin= await user.save();
        res.status(200).json({message:"user upadted successfully"})
        console.log(userLogin);
      

    }catch(e){
        console.log(e);}

}

const user_ranking= async(req,res)=>{
    const {codeforce,codechef}= req.body; 
    console.log(req.body);
  
    if(userLogin)
    {
      try{
          await User.findByIdAndUpdate(userLogin,{
              // pushing into user databse 
              $push:{
                  myRanking:codeforce
              },
          }
          )
         
           await User.findByIdAndUpdate(userLogin,{
            // pushing into user databse 
            $push:{
                myRanking:codechef
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
module.exports= {
    profile,
    update_profile,
    user_data,
    user_ranking,
}