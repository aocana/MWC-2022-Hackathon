const db = require('../config/database')
const {prompt} = require('inquirer');
const Developer = require('../models/developer'); // import model

// get all developers
const getAllDevelopers = async () => {
    try {
        const devs = await Developer.find({}, {name: 1, category: 1, date: 1, _id: 0});
        devs.forEach(dev => {
            console.log(`${Date(dev.date)},${dev.category}, ${dev.name} `)
        })
        console.log(`\n${devs.length} developers registered`)
    } catch (error) {
        console.log(error);
    } finally {
        process.exit();
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
const addDeveloper = () => {
    try {
        prompt([
            {
                name: 'name',
                type: 'string',
                message: 'Write name'
            },
        ]).then(async developer => {
                //const newDev = await Developer.create(developer);
                console.log(`New Developer ${developer.name} added`);
                process.exit()
            }
        )
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getAllDevelopers, getDeveloperById, addDeveloper};