const express = require('express');
const pg = require('pg');
const morgan = require('morgan');


const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res, next) => {
    res.send('hello world!');
}
)

const PORT = 1337

app.listen(PORT);


