const {prompt} = require('inquirer')
const { Sequelize, Model, DataTypes, Op } = require('sequelize')
const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/apple_db')

class Phone extends Model {}
class Laptop extends Model {}
class Tablet extends Model {}

Phone.init({
  name: {
    type: DataTypes.STRING,
    unique: true
  },
  model:{
    type: DataTypes.STRING,
    unique:true
  },
  released:{
    type: DataTypes.INTEGER
  }

}, { sequelize, modelName: 'phone' })

Laptop.init({
  name: {
    type: DataTypes.STRING,
    unique: true
  },

  model: {
    type: DataTypes.STRING,
    unique: true
  },

  year:DataTypes.INTEGER,
  storage:DataTypes.INTEGER,
  size:DataTypes.STRING
  
}, { sequelize, modelName: 'laptop' })

Tablet.init({
  name: {
    type: DataTypes.STRING,
    unique: true
  },

  model: {
    type: DataTypes.STRING,
    unique: true
  },

  releazed: DataTypes.INTEGER,
  size: DataTypes.STRING

}, { sequelize, modelName: 'Tablet' })

sequelize.sync()