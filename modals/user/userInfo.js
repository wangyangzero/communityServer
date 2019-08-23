const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userInfoSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    nickname:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
    },
    message:
        {
            type: String,
            default: '这个人很懒，时间都被代码占用了'
        }
    ,
    Authorization:{
        type: Number,
        default: 0
}
});

let userInfo = mongoose.model('userInfo',userInfoSchema);


module.exports = userInfo;
