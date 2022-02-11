const mongoose = require('mongoose'); //import mongoose

const connectDB = async () => {
    try {
        //connect to database
        await mongoose.connect('mongodb://localhost:27017/mwc', {
            useNewUrlParser: true, useUnifiedTopology: true
        })
    } catch (error) {
        console.error(error)
        process.exit()
    }
}

module.exports = connectDB()