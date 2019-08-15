const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let laboratorySchema = new Schema({
    data:{
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }

});

let laboratory = mongoose.model('laboratory',laboratorySchema);


module.exports = laboratory;