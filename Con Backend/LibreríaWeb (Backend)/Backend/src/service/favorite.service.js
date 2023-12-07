
const { Models } = require("../db.js");

const createFavoriteService = async(librofav)=>{
    try {
        const newFavorite = await Models.Favorite.create({
            id: librofav.name,
            state: true,
            tipo: librofav.tipo,
            StudentId: librofav.StudentId,
            BookId: librofav.BookId
        });
        return newFavorite;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const getFavoriteList= async(StudentId)=>{
    try {
        const ListaFavoritos = await Models.Favorite.findAll({
            where:{
                StudentId: StudentId
            }
        })
        return ListaFavoritos
    } catch (error) {
        console.error(error);
        return null
    }
}   

const removeLibroFavorito = async (librofav)=>{
    try {
        const removerFav = await Models.Favorite.remove({
            where:{
                StudentId:librofav.StudentId,
                BookId: librofav.BookId
            }
        })
        return removerFav;
    } catch (error) {
        console.error(error);
        return null
    }
}

module.exports ={
    getFavoriteList,
    createFavoriteService,
    removeLibroFavorito,
};