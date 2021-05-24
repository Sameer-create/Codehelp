const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const blogSchema= new Schema({

    blogTitle: {
        type: String,
        required: true
    },
    blogSnippet: {
        type:String,
        required: true,
    },
     blogBody: {
        type:String ,
        required: true,
    },
    blogName: {
        type:String ,
        required: true,
    },
});
const Blog= mongoose.model('BLOG',blogSchema);
 module.exports= Blog;
