const bcrypt = require('bcryptjs');
require('../db/conn');
const User = require('../model/userSchema');
 register = async(req, res) => {
    const { name, email, phone, Password, cPassword } = req.body;

    // if any field is not filled
    if (!name || !email || !phone || !Password || !cPassword) {
        return res.status(422).json({ error: "please fill all the fields properly" });
    }
    if (Password != cPassword) {
        return res.status(422).json({ error: "Confirm password not match to the actual password" });
    }

    try {
        userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email Already exist" });
        }
        const user = new User({ name, email, phone, Password, cPassword })
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
        const { email, Password } = req.body;
        if (!email || !Password) {
            return res.status(400).json({ error: "Please fill all the fields" });
        }

         userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(Password, userLogin.Password);
            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials pass" });
            } else {
                res.status(201).json({error:"oj=k got it "})
                
            }
        } else {
            res.status(400).json({ error: "Invalid credentials email" });
        }

    } catch (err) {
        console.log(err);}
    }

module.exports = {
    register,
       signin
    
}