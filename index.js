let express = require('express')
let app = express()
let PORT = process.env.PORT

let students = [
    {
        id: '5935512037',
        name: 'Mustofa',
        surname: 'Sachi',
        major: 'CoE',
        GPA: 2.22
    },
    {
        id: '5935512038',
        name: 'Tony',
        surname: 'Padilla',
        major: 'CoE',
        GPA: 2.52
    },
    {
        id: '5935512039',
        name: 'Justin',
        surname: 'Foley',
        major: 'CoE',
        GPA: 1.28
    },
]

app.get('/', (req, res) => {
    console.log(students)
    res.send(students)
})

app.get('/crash', (req, res) => {
    console.log('Crash!!')
    res.send('Crash!!')
    process.exit(1)
})

app.listen(PORT, () => console.log('Server running at ', PORT))