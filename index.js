const express = require('express')
const app = express()

const port = 3030

app.listen(port, () => {
    console.log(`Listen port ${port}`);
})

app.use(express.urlencoded({extended: true}));
app.use(express.json())


const Task = require('./Controlers/Task')
app.use('/task', Task);
