const Tour = require('./../models/tourModel')

// const fs = require('fs')
// e kem lexu filen i cili i permban te gjitha tours
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))


exports.getAllTours = async (req, res) => {

    try {


        // BUILD THE QUERY

        const queryObj = { ...req.query } // new object
        const exludedFileds = ['page', 'sort', 'limit', 'fields'] //fushat qe nuk perfshi ne filtrim

        exludedFileds.forEach(el => delete queryObj[el])



        // convert query to string

        let queryStr = JSON.stringify(queryObj) // e bojm string objektin

        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        console.log(JSON.parse(queryStr))




        console.log("req.query: ", req.query, "req.queryObj ", queryObj)
        const query = Tour.find(JSON.parse(queryStr))
        const tours = await query

        res.json({
            status: "success",
            results: tours.length,
            data: { tours }
        })


    }
    catch (err) {
        res.json({
            status: "fail",
            message: err
        })

    }
}

exports.createTour = async (req, res) => {
    // O1
    // const newTour = new Tour({})
    // newTour.save()

    try {
        const newTour = await Tour.create(req.body)

        res.json({
            status: "succes",
            data: {
                tour: newTour
            }
        })
    }

    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }



}

exports.getTour = async (req, res) => {
    console.log(req.params)

    try {
        const tour = await Tour.findById(req.params.id)

        res.json({
            status: "success",
            data: { tour }
        })
    }

    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }

}

exports.updateTour = async (req, res) => {

    try {

        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.json({
            status: "success",
            data: {
                tour
            }
        })
    }

    catch {
        res.json({
            status: "fail",
            message: err
        })
    }
}

exports.deleteTour = async (req, res) => {

    try {

        await Tour.findByIdAndDelete(req.params.id)

        res.json({
            status: "succsess",
            data: null
        })
    }

    catch (err) {
        res.json({
            status: "fail",
            message: err
        })
    }

}