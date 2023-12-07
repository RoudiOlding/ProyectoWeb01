const { Models } = require("../db.js");

const getRegisterStudentService = async (body) =>{
    try{
        const student = await Models.Student.create({
            name:body.name,
            lastName:body.lastName,
            email:body.email,
            password:body.password,
            identityDoc:body.identityDoc,
            photo:body.photo,
            language:body.language,
            prefix:body.prefix,
            colorfavorite:body.colorfavorite,
        });
        return student;
    }catch(e){
        throw Error("Error while creating Student: " + e);
    }
}
const getUpdateStudentService = async (body) =>{
    try{
        const student = await Models.Student.findOne({
            where:{
                id: body.id,
            },
        });
        if (!student) {
            throw new Error("Student not found");
        }

        await student.update({
            name:body.name,
            lastName:body.lastName,
            email:body.email,
            password:body.password,
            identityDoc:body.identityDoc,
            photo:body.photo
        });
       return student;
    }catch(e){
        throw Error("Error while update Student: " + e);
    }
}

const getVisualiseStudentService = async (body) =>{
    try{
        const student = await Models.Student.findOne({
            attributes: ["name","lastName","email","password","identityDoc","photo"],
            where:{
                id:body.id,
            },
        });
      return student;
    }catch(e){
        throw Error("Error while visualise Student: " + e);
    }
};
const getAllStudentsService = async()=>{
    try{
        return await Models.Student.findAll({
            attributes: ["id","name","lastName","email","password","identityDoc","photo"] 
        })
    }catch(error){
        console.error(error);
        return null
    }
}
module.exports ={
    getRegisterStudentService,
    getUpdateStudentService,
    getVisualiseStudentService,
    getAllStudentsService
};