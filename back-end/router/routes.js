const express = require('express');
const router = express.Router();


const authFunc = require('../controllers/loginsignupController');
const totaluserController = require('../controllers/totaluserController');
const profileController= require('../controllers/profileController')
const blogCreate= require('../controllers/blogController')


// register page
router.post('/register', authFunc.register);
// Login route
router.post('/signin',authFunc.signin)
// LogOut routes
router.get('/logout',authFunc.logout)


//TOTAL USER PAGE
// showing total users
router.get('/totaluser', totaluserController.total_user)
router.patch('/addfriend',totaluserController.add_friend )
router.patch('/removefriend',totaluserController.remove_friend );
router.post('/otherprofile',totaluserController.other_profile);
router.get('/otherprofile',totaluserController.other_profile);

// PROFILE PAGE
router.get('/profile', profileController.profile)
// update profile for user
router.put('/updateprofile',profileController.update_profile);
router.get('/updateprofile',profileController.user_data)
router.patch('/ranking',profileController.user_ranking);

// creating blog
router.post('/blogcreate',blogCreate.blog_create);
//  for showing all blogs 
router.get('/allblogs',blogCreate.blog_show);


module.exports = router;

