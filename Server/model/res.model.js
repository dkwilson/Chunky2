const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Resource = new Schema({
    res_description: {
        type: String
    },
    res_link: {
        type: String
    },
    res_priority: {
        type: String
    },
    res_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Resource', Resource);