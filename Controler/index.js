const database = require('../Model')

class TaskController {
    novaTarefa(req, res){
        const {tarefa, descricao} = req.body;

        console.log(req.body);
        database.query(`insert into tasks(tarefa, descrição) values('${tarefa}', '${descricao}');`,
            (err, response, fields) => {
                console.log(err);
                console.log(response);
                console.log(fields);

                res.status(200);
                res.send();
            })

    }
}

module.exports = new TaskController;