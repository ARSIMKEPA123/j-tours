const Tour = require('./../models/tourModel')

// const fs = require('fs')
// e kem lexu filen i cili i permban te gjitha tours
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))




exports.getAllTours = async (req, res) => {

    try {

        const tours = await Tour.find()

        res.json({
            status: "success",
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

    // o1
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
               data: {
                
              tour
         }
     })

    }

    catch (err){
        
        res.json({

            status: "fail",
            message: err

        })

    }




    // po e marrim id-n dhe po e konvertojm ne string
    // const id = req.params.id * 1
    // const tour = tours.find(el => el.id === id)

    // res.json({
    //     status: "success",
    //     data: {
    //         tour
    //     }
    // })

}

exports.updateTour = async (req, res) => {



    try {

        const tour = await Tour.findByIdAndUpdate(res.params.id, req.body, {
            
            new: true,
            runValidators: true

        })

        res.json({
            status: "success",
            data: {
                tour: "Updated tour"
            }
        })

    }

    catch {
        
        res.json({

            status: "dail",
            message: err

        })

    }

    res.json({
        status: "success",
        data: {
            tour: "Updated tour"
        }
    })

}

exports.deleteTour = (req, res) => {

    res.json({
        status: "succsess",
        data: null
    })
}







exports.deleteTour = async (req, res) => {
     
    try {
        await Tour.findByIdAndDelete(req.params.id)


        res.json({
            
            status: "success",
            data: null
        })

    }


    catch (err){
        
        res.json({

            status: "fail",
            message: err

        })

    }


 }