const { Models } = require("../db.js");
const { faker } = require('@faker-js/faker');
const routesStudent = require("express").Router();

routesStudent.get("/student", async (req, res) => {
    try {
        const result = await Models.Student.findAll();
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Students Returned"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesStudent.get("/student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Models.Student.findOne({
            where: {
                id,
            }
        });
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Student Returned"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesStudent.post("/student", async (req, res) => {

    try {
        await Models.Student.sync()
        const result = await Models.Student.create({
            name: faker.internet.userName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            identityDoc: 3456789,
            photo:faker.image.url(),
        })
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Student Created"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
})
routesStudent.put("/student/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const dataStudent = req.body;
        await Models.Student.sync()
        const result = await Models.Student.update({
            name: dataStudent.name,
            lastName: dataStudent.lastName,
            email: dataStudent.email,
            password: dataStudent.password,
            identityDoc: dataStudent.identityDoc,
            photo: dataStudent.photo,
        },{
            where:{
                id,
            }
        })
        res.status(200).json({
            status: 200,
            result: result,
            message: "Succesfully Student Update"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
routesStudent.delete("/student/:id", async(req, res) =>{
    try{
        const id = req.params.id;
        const result = await Models.Student.destroy({
            where:{
                id,
            }
        })
        res.status(204).json({
            status: 204,
            result: result,
            message: "Succesfully Student Delete"
        })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
});
module.exports={routesStudent};
