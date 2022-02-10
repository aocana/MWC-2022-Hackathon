const Developer = require('../models/developer'); // import model
const db = require('../config/database')

// get all developers
const getAllDevelopers = async () => {
    try {
        const devs = await Developer.find({}, {name: 1, category: 1, date: 1, _id: 0});
        console.log(devs)
        console.log(`${devs.length} developers`)
    } catch (error) {
        console.log(error);
    }
}

//get developer by Id
const getDeveloperById = async (developerId) => {
    try {
        const developer = await Developer.find(developerId);
        console.log(developer)
    } catch (error) {
        console.log(error);
    }
}

//add developer to
const addDeveloper = async (developer) => {
    try {
        const newDev = await Developer.create(developer);
        console.log('New Developer added')
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getAllDevelopers, getDeveloperById, addDeveloper};