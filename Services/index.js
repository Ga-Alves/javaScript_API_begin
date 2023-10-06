const Todo = require('../Database/Todo')

class Task {
    async criaNovaTarefa(req, res, next){
        Todo.create(req.body)
            .then(()=> {
                res.status(200);
                res.send();
            })
            .catch((err)=> {
                res.status(500);
            })
    }
}

module.exports = new Task;