const { Models } = require("../db.js");
const {getBookAtributesService} = require ("./book.service.js");

const createBookingService = async(body)=>{
    try {
        const booking = await Models.Booking.create({
            StudentId: body.StudentId,
            BookId: body.BookId,
            title: body.title,
            photobook: body.photobook,
            startDate: body.startDate,
            endDate: body.endDate,
        });
            return booking;
    } catch (error) {
        throw Error("Error while creating Booking"+ error);
    }
}

const getVisualizeBookingService = async(body) =>{
    try{
        const booking = await Models.Booking.findAll({
            attributes:['BookId','StudentId','title','photobook'],
            where:{
                StudentId:body.id
            },
        });
        return booking; 
    }catch(e){
        throw Error("Error while visualize Student Booking: " + e);
    }
};
const getUpdateBookingService = async(body) =>{
    try{
        const booking = await Models.Booking.findOne({
            
            where:{
                id:body.id,
            },
        });
        await booking.update({
            startDateod:by.startDate,
            endDate:body.endDate,
            StudentId:body.StudentId,
            BookId:body.BookId,
            
        });
    }catch(e){
        throw Error("Error while update Booking: " + e);
    }
};

const getLastBookingsService =async() =>{
    try {
        const lastBookings = await Models.Booking.findAll({
            order:[
                ['createdAt', 'DESC'],
            ],
            limit: 2
        });
        return lastBookings
    } catch (e) {
        throw Error("Error while getting last Bookings: " + e);
    }
}

module.exports ={
    getUpdateBookingService,
    getVisualizeBookingService,
    getLastBookingsService,
    createBookingService
}