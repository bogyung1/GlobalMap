const express = require('express');
const connect = require('./schemas')
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const port =process.env.PORT || 3002;

connect();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'imposter'}));
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})