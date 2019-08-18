const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newInfoSchema = new Schema({
    data:{
        href: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        content:{
            type:String,
            required:true,
        },
        tag: {
            type: String,
            required: true,
        },
        tagColor: {
            type: String,
            required: true,
        }
    }


});

let newInfo = mongoose.model('newInfo',newInfoSchema);


module.exports = newInfo;
