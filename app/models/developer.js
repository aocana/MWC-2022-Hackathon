const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        enum: ["Back", "Front", "Mobile", "Data"],
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Developer', DeveloperSchema);