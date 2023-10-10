const Router = require('express').Router();

const TaskService = require('../Services/Task')

Router.post('/create', 
    async (req, res, next) => {
        try {
            await TaskService.createNewTask(req.body);
            res.status(200).send('Tarefa criada com sucesso');
        } catch (error) {
            next(error);
        }
    }
);
    
Router.get('/',
    async (_, res, next) => {
        try {
            const allTasks = await TaskService.getAllTasks();
            res.status(200).send(allTasks);
        } catch (error) {
            next(error);
        }
    }
);

Router.delete('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await TaskService.deleteTaskByID(id);
            res.status(200).send('Tarefa Deletada com sucesso');
        } catch (error) {
            next(error);
        }
    }
);


module.exports = Router;