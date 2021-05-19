const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    Password: {
        type: String,
        required:true
    },
    cPassword: {
        type: String,
        required:true
    },
    tokens: [
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
})

// We are hashing Password
userSchema.pre('save',async function(next){
  if(this.isModified('Password')){
      this.Password = await bcrypt.hash(this.Password,12);
      this.cPassword = await bcrypt.hash(this.cPassword,12);
  }  
  next();

})
// we are generating token
userSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;

    }catch(err){
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;