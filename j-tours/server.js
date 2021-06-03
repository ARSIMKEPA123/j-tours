const mongoose = require('mongoose')


const dotenv = require('dotenv')

dotenv.config({path: "./config.env" })

const app = require('./app')



const DB = process.env.DATABASE.replace(

    '<password>', process.env.DATABASE_PASSWORD

)

mongoose.connect(DB, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useFindModify: false,
    useUndefinedTopology: false,

}).then(() => console.log('DB connection succesful'))








app.listen(3000, () => {
    console.log("Server is listeing")
})



