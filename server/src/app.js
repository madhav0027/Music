console.log("Serverside");
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(bodyparser.json());
app.use(cors());

app.get('/status',(req,res) =>
{
    res.send({
        "message":"Hi There!"
    })
});

app.listen(8081);