const Router = require ("express")

const
{updateBooking,
getVisualizeBooking,
getLastBookings,
createBooking}
= require ('../controllers/booking.controllers.js')

const bookingRouter = Router()

bookingRouter.get(
    "/api/student/getVisualizeBooking/:id",
    getVisualizeBooking
)

bookingRouter.put(
    "/api/student/updateBooking/:id",
    updateBooking
)

bookingRouter.get(
    "/api/student/getLastBookings",
    getLastBookings
)

bookingRouter.post(
    "/api/student/createBooking",
    createBooking
)
module.exports= bookingRouter;