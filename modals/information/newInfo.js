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
        },
        description: {
            type: String,
        },
        content:{
            type:String,
            required:true,
        },
        tag: {
            type: String,
        },
        tagColor: {
            type: String,
        }
    }


});

let newInfo = mongoose.model('newInfo',newInfoSchema);


module.exports = newInfo;
