const express = require('express');
const pg = require('pg');
const morgan = require('morgan');
const layout = require('./views/layout')


const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res, next) => {
    console.log('hello world');
    res.send(layout('hello world!'));
}
)

const PORT = 1337

app.listen(PORT);


