//var DB = require("./connection");
var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres:///doSomething_db');
var List = sequelize.import('../app/models/list');
var Task = sequelize.import ('../app/models/task');

Task.belongsTo(List);
List.hasMany(Task);

module.exports = {
  sql: Sequelize,
  do: sequelize,
  models: {
    List: List,
    Task: Task
  }
}
