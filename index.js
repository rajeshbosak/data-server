const express = require('express');
const bodyParser = require('body-parser');

const _data = require('./data.json');
const _dbdata = require('./dbdata.json');

const PORT = 4000;
const app = express();
app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`listening at port : ${PORT}`);
});

app.get('/',(req,res)=>{
    console.log('/ home ');

    const serverResponse = {error: null, data:null, success: false};
    res.status(200);
    serverResponse.success = true;
    serverResponse.data = {message: 'homepage called'};

    res.send(serverResponse);
});

app.get('/data',(req,res)=>{
    console.log('/ home ');

    const serverResponse = {error: null, data:null, success: false};
    res.status(200);
    serverResponse.success = true;
    serverResponse.data = _data;

    res.send(serverResponse);
});

app.get('/dbdata',(req,res)=>{
    console.log('/ home ');

    const serverResponse = {error: null, data:null, success: false};
    res.status(200);
    serverResponse.success = true;
    serverResponse.data = _dbdata;

    res.send(serverResponse);
});