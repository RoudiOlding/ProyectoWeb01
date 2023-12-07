const{
    getRegisterStudentService,
    getUpdateStudentService,
    getVisualiseStudentService,
    getAllStudentsService
  } = require("../service/student.service.js");
  const getRegisterStudent = async (req,res) =>{
    try{
      const result = await getRegisterStudentService(req.body);
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Succesfully Student Register",
      });
    }catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
  const getUpdateStudent = async (req,res) =>{
    try{
      const result = await getUpdateStudentService(req.body);
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Succesfully Student Update",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
  const getVisualiseStudent = async (req, res) => {
    try {
      const result = await getVisualiseStudentService(req.body);
  
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Succesfully Student Returned",
      });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };
  const getAllStudents =async(req,res)=>{
    const result = await getAllStudentsService();
    return res.status(200).json(result);
  }
  
  module.exports ={
    getRegisterStudent,
    getUpdateStudent,
    getVisualiseStudent,
    getAllStudents
  };