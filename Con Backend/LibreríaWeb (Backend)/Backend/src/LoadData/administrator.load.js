const { Models } = require("../db.js");
const { faker } = require('@faker-js/faker');
const routesAdministrator = require("express").Router();

routesAdministrator.get("/administrator", async (req, res) => {
    try {
        const result = await Models.Administrator.findAll();
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Administrators Returned"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesAdministrator.get("/administrator/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Models.Administrator.findOne({
            where: {
                id,
            }
        });
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Administrator Returned"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesAdministrator.post("/administrator", async (req, res) => {

    try {
        await Models.Administrator.sync()
        const result = await Models.Administrator.create({
            name: faker.internet.userName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            identityDoc: 3456789,
            photo:faker.image.url(),
            language: 'español',
            prefix: faker.person.prefix(),
            colorfavorite:faker.color.rgb(),
        })
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Administrator Created"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
})
routesAdministrator.put("/administrator/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const dataAdministrator = req.body;
        await Models.Administrator.sync()
        const result = await Models.Administrator.update({
            name: dataAdministrator.name,
            lastName: dataAdministrator.lastName,
            email: dataAdministrator.email,
            password: dataAdministrator.password,
            identityDoc: dataAdministrator.identityDoc,
            photo: dataAdministrator.photo,
            language: dataAdministrator.language,
            prefix: dataAdministrator.prefix,
            colorfavorite: dataAdministrator.colorfavorite,
        },{
            where:{
                id,
            }
        })
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Administrator Update"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesAdministrator.delete("/administrator/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const result = await Models.Administrator.destroy({
            where:{
                id,
            }
        })
        res.status(204).json({
            status: 204,
            result: result,
            message: "Succesfully Administrator Delete"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
module.exports={routesAdministrator};