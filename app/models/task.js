module.exports = function(sequelize, Sequelize){
  return sequelize.define("task", {
    id: Sequelize.INTEGER,
    body: Sequelize.STRING,
    completed: Sequelize.BOOLEAN,
    listId: Sequelize.INTEGER
  });
}

// module.exports = [
//   {id: 1, body:"Water the plants", completed: false, listId: 1},
//   {id: 2, body:"Feed the cat", completed: true, listId: 1},
//   {id: 3, body:"Send the WDI instructors a nice card", completed: false, listId: 3}
// ]
