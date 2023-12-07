const service = require ("../service/booking.service.js")

const createFavorite = async (req,res)=>{
    const entry = req.body;
    const result =await service.createFavoriteService(entry)

    if (result)
        res.status(200).json(result)
    else 
        res.status(500).json({message:"No se pudo insertar"})
}

const getFavoriteList = async(req,res)=>{
    const id = req.params.StudentId
    const result = await service.getFavoriteList(id)

    if(result)
        res.status(200).json(result)
    else 
        res.status(500).json({message:"No encontrado"})
}

const removeLibro = async (req,res)=>{
    const result = await service.removeLibroFavorito(req.body)

    if (result)
        res.status(200).json(result)
    else
        res.status(500).json({message:"No encontrado"})
}

const control = {createFavorite,getFavoriteList,removeLibro}

module.exports = control;