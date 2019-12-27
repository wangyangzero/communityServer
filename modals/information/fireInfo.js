const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let fireInfoSchema = new Schema({
    data:
        {
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
            content: {
                type: String,
                required: true,
            },
            tag: {
                type: String,
            },
            tagColor: {
                type: String,
            }
        }

});

let fireInfo = mongoose.model('fireInfo',fireInfoSchema);

module.exports = fireInfo;
