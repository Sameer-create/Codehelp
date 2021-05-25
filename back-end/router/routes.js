const express = require('express');
const router = express.Router();


const authFunc = require('../controllers/loginsignupController');
const totaluserController = require('../controllers/totaluserController');
const profileController = require('../controllers/profileController')
const blogCreate = require('../controllers/blogController');
const contestList = require('../controllers/contestlist/displaycontest.js');


// register page
router.post('/register', authFunc.register);
// Login route
router.post('/signin', authFunc.signin)
    // showing total users
router.get('/totaluser', totaluserController.total_user)
    //  making friend from total User by getting id of friend
router.patch('/addfriend', totaluserController.add_friend)
    // profile page 
router.get('/profile', profileController.profile)
    // creating blog
router.post('/blogcreate', blogCreate.blog_create);
//  for showing all blogs 
router.get('/allblogs', blogCreate.blog_show);
//for sending contest list
router.get('/contest', contestList.getlist);

module.exports = router;