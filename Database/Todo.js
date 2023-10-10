const Sequelize = require('sequelize')
const database = require('./index.js');

const Todo = database.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,   
        primaryKey: true,
    },
    tarefa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.INTEGER,
    },
    isCheck: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
},
{
    timestamps: false
});

module.exports = Todo;