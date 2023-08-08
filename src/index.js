const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../src/config/server-config');
const response = require('./middleware/response');
const errorhandler = require('./middleware/errorhandler');
const apiroutes = require('./routes/user');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',response);
app.use('/api',apiroutes);
app.use('/',errorhandler);


app.listen(PORT,async()=>{
    console.log("Server is running on PORT no:",PORT);
});
