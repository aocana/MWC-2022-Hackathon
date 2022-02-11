const {prompt} = require('inquirer');  //import prompt from inquirer
const db = require('../config/database')  //import database connection
const Developer = require('../models/developer');  // import model
const addDevQuestions = require('../lib/devPromptQuestions.js')  // import dev questions

// get all developers
const getAllDevelopers = async () => {
    try {
        //show all devs order by date
        const devs = await Developer.find({}, {name: 1, category: 1, date: 1, _id: 0}).sort({date: 1});

        //show dev info
        devs.forEach(dev => {
            console.log(`${dev.date } - ${dev.category} - ${dev.name}`)
        })

        console.log(`\n${devs.length} developers registered`)
    } catch (error) {
        console.error(error);
    } finally {
        process.exit();
    }
}


//add developer
const addDeveloper = () => {
    try {
        prompt(addDevQuestions).then(async developer => {
            const email = developer.email
            // search this email on database
            const exists = await Developer.findOne({email})

            if (exists){
                //show message and exit
                console.log(`\nOne developer haves this email, not added, try again.`)
                process.exit()
            }
            // if email not exists add dev to database
            const newDev = await Developer.create(developer);
            console.log(`Developer ${newDev.name} added on ${newDev.date}`);
        })
    } catch (error) {
        console.error(error);
    }
}


module.exports = {getAllDevelopers, addDeveloper};