



const profile =  (req, res) => {
    res.status(200).send(userLogin);
    console.log(userLogin._id)
   
}

module.exports= {
    profile
}