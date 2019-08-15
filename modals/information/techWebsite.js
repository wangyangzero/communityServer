const mongoose = require('mongoose');
const Schema = mongoose.Schema

let techWebsiteSchema = new Schema({
    data:{
        name: {
            type: String,
            required: true // 必须有
        },
        href: {
            type: String,
            required: true
        },
        tag: [
            {
                tagName: {
                    type: String,
                    required: true
                },
                tagColor: {
                    type: String,
                    required: true
                }
            }
        ]
    }


});

let techWebsite = mongoose.model('techWebsites', techWebsiteSchema);


module.exports = techWebsite;


