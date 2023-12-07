const { Models } = require("../db.js");
const { Router } = require("express");
const routesBooking = Router();

routesBooking.get("/booking", async (req, res) => {
    try {
        const result = await Models.Booking.findAll();
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Booking Returned"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesBooking.get("/booking/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Models.Booking.findOne({
            where: {
                id,
            }
        });
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Booking Returned"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesBooking.post("/booking", async (req, res) => {

    try {
        await Models.Booking.sync()
        const result = await Models.Booking.create({
            startDate: new Date(),
            endDate: new Date(),
        })
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Booking Created"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesBooking.put("/booking/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const dataBooking = req.body;
        await Models.Booking.sync()
        const result = await Models.Booking.update({
            startDate:dataBooking.startDate,
            endDate:dataBooking.endDate,
            StudentId:dataBooking.StudentId,
            BookId:dataBooking.BookId,
            title:dataBooking.title,
            photobook: dataBooking.photobook
        },{
            where:{
                id,
            }
        })
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Booking Update"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesBooking.delete("/booking/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const result = await Models.Booking.destroy({
            where:{
                id,
            }
        })
        res.status(204).json({
            status: 204,
            result: result,
            message: "Succesfully Booking Delete"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
module.exports={routesBooking};