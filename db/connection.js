var Sequelize = require('sequelize');
/*
var sequelize = new Sequelize('foorumi', '', '', {
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});*/
var sequelize = new
Sequelize('postgres://ojenbrmzbasmfc:31b3861bd4fad75423afb1483becda419eddb01c596911caffa92b7f776e1cee@ec2-54-243-42-218.compute-1.amazonaws.com:5432/d19le0a4qd0i87', {
dialect: 'postgres',
protocol: 'postgres'
});

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
