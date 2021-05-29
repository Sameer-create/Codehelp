const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   userName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    cPassword: {
        type: String,
        required: true
    },
    myFriends: {
        type: [String],
        required: false,
    },
    myFriendsCount:{
        type:Number,
        required:false,
    },
    myRanking:{
        type:[String],
        required:false,
    },
})

// We are hashing Password
userSchema.pre('save', async function(next) {
    if (this.isModified('Password')) {
        this.Password = await bcrypt.hash(this.Password, 12);
        this.cPassword = await bcrypt.hash(this.cPassword, 12);
    }
    next();

})

const User = mongoose.model('USER', userSchema);

module.exports = User;