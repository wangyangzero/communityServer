const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogSchema = new Schema({
    data:{
        href: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        easy_des: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }

});

let blog = mongoose.model('blog',blogSchema);


module.exports = blog;