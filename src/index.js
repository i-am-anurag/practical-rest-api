const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../src/config/server-config');
const apiroutes = require('./routes/user');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiroutes);


app.listen(PORT,()=>{
    console.log("Server is running on PORT no:",PORT);
});
