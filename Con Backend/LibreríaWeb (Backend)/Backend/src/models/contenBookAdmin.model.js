module.exports = (sequelize, Sequelize) => {
    const  ContenBookAdmin = sequelize.define(" ContenBookAdmin", {
        id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        },
    });
    return ContenBookAdmin;
};