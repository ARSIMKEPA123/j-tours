const express = require('express')
const fs = require('fs')

const app = express()


app.use(express.json())


app.get ('/'  , (req,res) => {

    res.json({message: "hello from the server side",
    app: "j-tours"
})
} )

app.get ('/'  , (req,res) => {

    res.send('you can post to this URL')
} )


const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req,res)=>{

    res.json({

        status: "success",
        data: {tours}

    })

})


app.post('/api/v1/tours', (req, res) => {
    // console.log(req.body)

    // ka me u shtu nje dokument i ri
    const newId = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newId }, req.body)

    tours.push(newTour)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.json({
            status: "success",
            data: {
                tour: newTour
            }
        })

    })

})
app.listen(3000 , () => {

    console.log('server is listening')
})

// git config --global user.name 'ARSIMKEPA123'
// git config --global user.email 'arsimkepa@gmail.com'

