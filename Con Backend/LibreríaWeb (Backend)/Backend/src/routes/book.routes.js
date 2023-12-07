const Router = require("express");

const
{getRegisterBook,
getAllBook,
getBookAtribute,
updateBookAtributes,
updateStatusBooking,
getMostRequestedBooks,
getLibrosUserProx}
= require  ('../controllers/book.controllers.js')

const bookRouter = Router();
bookRouter.post(
    '/api/student/getRegisterBook',
    getRegisterBook
);
bookRouter.get(
    '/api/student/getAllBook',
    getAllBook
);
bookRouter.get(
    '/api/student/getBookAtribute/:id',
    getBookAtribute
)
bookRouter.put(
    '/api/student/updateBookAtributes/',
    updateBookAtributes
)
bookRouter.put(
    '/api/student/updateStatusBooking/:id',
    updateStatusBooking
)
bookRouter.get(
    '/api/student/getMostRequestedBooks',
    getMostRequestedBooks
)
bookRouter.get(
    '/api/student/getLibrosUserProx',
    getLibrosUserProx
)

module.exports=bookRouter;