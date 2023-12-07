const { Models } = require("../db.js");

const getRegisterAdministratorService = async (body) =>{
    try{
        const administrator = await Models.Administrator.create({
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
        return administrator;
    }catch(e){
        throw Error("Error while creating Administrator: " + e);
    }
}
const getUpdateAdministratorService = async (body) =>{
    try{
        const administrator = await Models.Administrator.findOne({
            where:{
                id: body.id,
            },
        });
        if (!administrator) {
            throw new Error("Administrator not found");
        }

        await administrator.update({
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
        return administrator;
    }catch(e){
        throw Error("Error while update Administrator: " + e);
    }
}


const getAllAdministratorsService = async()=>{
    try{
        return await Models.Administrator.findAll({
            attributes: ["name","lastName","email","password","identityDoc","photo","language","prefix","colorfavorite"]
        });
    } catch (error) {
        console.error(error);
        return null
    }
}
const getVisualiseAdministratorService = async (body) =>{
    try{
        const administrator = await Models.Administrator.findOne({
            attributes: ["name","lastName","email","password","identityDoc","photo","language","prefix","colorfavorite"],
            where:{
                id:body.id,
            },
        });
      return administrator;
    }catch(e){
        throw Error("Error while visualise Administrator: " + e);
    }
};
module.exports ={
    getRegisterAdministratorService,
    getUpdateAdministratorService,
    getVisualiseAdministratorService,
    getAllAdministratorsService
};

