const Router = require("express");
const{
  getRegisterStudent,
  getUpdateStudent,
  getVisualiseStudent,
  getAllStudents
} = require("../controllers/student.controllers.js");

const studentRouter = Router();

studentRouter.post(
  "/api/student/getRegisterStudent",
  getRegisterStudent
);
studentRouter.put(
  "/api/student/getUpdateStudent",
  getUpdateStudent
);
studentRouter.get(
  "/api/student/getVisualiseStudent/:id",
  getVisualiseStudent
);
studentRouter.get(
  "/api/student/getAllStudents",
  getAllStudents
)

module.exports = studentRouter;