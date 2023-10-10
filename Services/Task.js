const Todo = require('../Database/Todo')

class Task {
    async createNewTask(body){
        return Todo.create(body)
    }

    async getAllTasks() {
        return Todo.findAll();
    }

    async deleteTaskByID(id) {
        return await Todo.destroy({where: { 'id': id}})
    }
}

module.exports = new Task;