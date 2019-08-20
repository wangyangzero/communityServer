const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let messageSchema = new Schema({
    nickname:{
      type: String
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    msg:{
        type: String,
        required: true,
    },
});

let message = mongoose.model('message',messageSchema);


module.exports = message;
