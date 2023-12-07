module.exports = (sequelize, Sequelize) => {
    const Administrator = sequelize.define("Administrator", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
      },
      identityDoc: {
        type: Sequelize.INTEGER,
      },
      photo: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      prefix: {
        type: Sequelize.STRING,
      },
      colorfavorite: {
        type: Sequelize.STRING,
      },
    });
  
    return Administrator;
  };