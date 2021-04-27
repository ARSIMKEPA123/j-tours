const express = require('express')
const fs = require('fs')

const app = express()


app.get ('/'  , (req,res) => {

    res.json({message: "hello from the server side",
    app: "j-tours"
})
} )

app.get ('/'  , (req,res) => {

    res.send('you can post to this URL')
} )


const tours = JSON.parse(fs.readFileSync('${__dirname}/dev-data/data/tours-simple.js'))




app.listen(3000 , () => {

    console.log('server is listening')
})

git config --global user.name 'ARSIMKEPA123'
git config --global user.email 'arsimkepa@gmail.com'