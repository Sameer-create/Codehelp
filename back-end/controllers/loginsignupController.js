const bcrypt = require('bcryptjs');
const User = require('../model/userSchema');
 register = async(req, res) => {
    const { name, email, userName, Password, cPassword } = req.body;

    // if any field is not filled
    if (!name || !email || !userName || !Password || !cPassword) {
        return res.status(422).json({ error: "please fill all the fields properly" });
    }
    if (Password != cPassword) {
        return res.status(422).json({ error: "Confirm password not match to the actual password" });
    }

    try {
        userExist = await User.findOne({ userName:userName })
        if (userExist) {
            return res.status(422).json({ error: "Email Already exist" });
        }
        const user = new User({ name, email, userName, Password, cPassword })
            // Here we are hashing our password before saving it

        await user.save();
        res.status(201).json({ message: "user registered successfully" });

    } catch (err) {
        console.log(err);
    }

}

signin = async(req, res) => {
    try {
        let token;
        const { userName, Password } = req.body;
        if (!userName || !Password) {
            return res.status(400).json({ error: "Please fill all the fields" });
        }

         userLogin = await User.findOne({ userName: userName });

        if (userLogin) {
            const isMatch = await bcrypt.compare(Password, userLogin.Password);
            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials pass" });
            } else {
                res.status(201).json({error:"oj=k got it "})
               // res.status(201).send(userLogin);
            }
        } else {
            res.status(400).json({ error: "Invalid credentials userName" });
        }

    } catch (err) {
        console.log(err);}
    }


    const logout= async (req,res)=>{
            userLogin=""
            res.status(200).send.json({message:"user logout form server"})
    }

module.exports = {
    register,
       signin,
       logout,
    
}