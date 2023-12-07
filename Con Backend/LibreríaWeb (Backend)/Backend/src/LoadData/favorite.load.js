const { Models } = require("../db.js");
const { faker } = require('@faker-js/faker');
const routesFavorite = require("express").Router();

routesFavorite.get("/favorite", async (req, res) => {
    try {
        const result = await Models.Administrator.findAll();
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Favorites Returned"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesFavorite.get("/favorite/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Models.Favorite.findOne({
            where: {
                id,
            }
        });
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Favorite Returned"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesFavorite.post("/favorite", async (req, res) => {

    try {
        await Models.Favorite.sync()
        const result = await Models.Favorite.create({
            state: faker.datatype.boolean(),
        })
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Favorite Created"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
})
routesFavorite.put("/favorite/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const dataFavorite = req.body;
        await Models.Favorite.sync()
        const result = await Models.Favorite.update({
            state: dataFavorite.state,
            StudentId:dataFavorite.StudentId,
            BookId:dataFavorite.BookId,
        },{
            where:{
                id,
            }
        })
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Favorite Update"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesFavorite.delete("/administrator/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const result = await Models.Favorite.destroy({
            where:{
                id,
            }
        })
        res.status(204).json({
            status: 204,
            result: result,
            message: "Succesfully Favorite Delete"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
module.exports={routesFavorite};