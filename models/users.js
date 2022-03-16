const { Sequelize } = require('sequelize');

module.exports=(sequelize,DataTypes)=>{
    let users = sequelize.define('users',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
          },
        name: {
          type: DataTypes.STRING,
        },
        enterprise:{
            type: DataTypes.STRING,
          },
          city:{
            type: DataTypes.STRING,
          },
          email:{
            type: DataTypes.STRING,
          },
          tele:{
            type: DataTypes.DOUBLE,
          },
          help:{
            type: DataTypes.STRING,
          },
          comenta:{
            type: DataTypes.STRING,
          },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      })
      return users
}