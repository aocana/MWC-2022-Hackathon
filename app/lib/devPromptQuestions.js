const addDeveloper = [
    {
        name: 'name',
        type: 'String',
        message: 'Write name'
    },
    {
        name: 'email',
        type: 'String',
        message: 'Write e-mail'
    },
    {
        type: 'list',
        name: 'category',
        message: 'Choose your category',
        choices: ['Front', 'Back', 'Mobile', 'Data']
    },
    {
        type: 'String',
        name: 'phone',
        message: 'Introduce your phone',
    },
    {
        type: 'list',
        name: 'date',
        message: 'Choose your date assist',
        choices: ['Feb 28, 2022', 'Mar 1, 2022', 'Mar 2, 2022', 'Mar 3, 2022']
    }
]

module.exports = addDeveloper