const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let fireInfoSchema = new Schema({
    data:
        {    href: {
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
            content: {
                type: String,
                required: true,
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

let fireInfo = mongoose.model('fireInfo',fireInfoSchema);


module.exports = fireInfo;
