const express = require('express')
const app = express()
const Task = require('./Services')


const port = 3030

app.listen(port, () => {
    console.log(`Listen port ${port}`);
})

app.use(express.json())

const middlewares = [
    function (req, res, next) {
        console.log('the response will be sent by the next function ...');
        // res.send('Block by middleware!');
        // return;
        next();
      },
    function (req, res) {
        res.send('Hello from B!');
    }
]
app.get('/', middlewares);
app.post('/', Task.criaNovaTarefa);

