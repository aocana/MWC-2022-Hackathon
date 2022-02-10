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
        type: Date,
        required: true
    }
})

DeveloperSchema.methods.devsList = async () => {
    try{
        const devs = await Developer.find({}, {name: 1, category: 1, date: 1, _id: 0});
        console.log(devs)
        console.log(`${devs.length} developers`)
    } catch (err){
        console.log(err)
    }
}

module.exports = mongoose.model('Developer', DeveloperSchema);