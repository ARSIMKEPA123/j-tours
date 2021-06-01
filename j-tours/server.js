const mongoose = require('mongoose')


const dotenv = require('dotenv')

dotenv.config({path: "./config.env" })

const app = require('./app')



const DB = process.env.DATABASE.replace(

    '<password>', process.env.DATABASE_PASSWORD

)

mongoose.connect(DB, {

    useNewUrlPearseer: true,
    useCreateIndex: true,
    useFindModify: false,
    useUndefinedTopology: false,

}).then(() => console.log('DB connection succesful'))



const tourSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "a tour must have a name"],
        unique: true
    },
    raiting:{
        type: Number,
        default: 4.0
    },
    price: {
        type: Number,
        required: [true, "a tour must have a name"]
    }


})

// tabela
const Tour = mongoose.model("tour", tourSchema)


// e mbushim tabelen
const testTour = new Tour ({
    name: "Paris",
    raiting: 4.3,
    price: 333,

})

testTour.save().then(doc =>{

console.log(doc)

}).catch(err => {

    console.log('Eror')


})

app.listen(3000, () => {
    console.log("Server is listeing")
})