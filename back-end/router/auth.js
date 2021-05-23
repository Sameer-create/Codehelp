// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// var userLogin;
// const User = require('../model/userSchema');
// const authFunc = require('../controllers/loginsignup.js');

// router.get('/', (req, res) => {
//     res.send(`connection is done`);
// });

// // collecting data using await async or register
// router.post('/register', authFunc.register);

// // Login route
// router.post('/signin', async(req, res) => {
//     try {
//         let token;
//         const { email, Password } = req.body;
//         if (!email || !Password) {
//             return res.status(400).json({ error: "Please fill all the fields" });
//         }

//         userLogin = await User.findOne({ email: email });

//         if (userLogin) {
//             const isMatch = await bcrypt.compare(Password, userLogin.Password);
//             if (!isMatch) {
//                 res.status(400).json({ error: "Invalid credentials pass" });
//             } else {
//                 res.status(201).redirect('/signin')
//             }
//         } else {
//             res.status(400).json({ error: "Invalid credentials email" });
//         }

//     } catch (err) {
//         console.log(err);
//     }
// });



// module.exports = router;

