const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let date = new Date();
let result = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
let messageSchema = new Schema({
    nickname:{
      type: String
    },
    avatar: {
        type: String,
    },
    date: {
        type: String,
        default: result,
    },
    msg:{
        type: String,
        required: true,
    },
});

let message = mongoose.model('message',messageSchema);


module.exports = message;
