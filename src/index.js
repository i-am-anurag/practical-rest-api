const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../src/config/server-config');
const apiroutes = require('./routes/user');
// const UserService = require('../src/services/user-service');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiroutes);


app.listen(PORT,async()=>{
    console.log("Server is running on PORT no:",PORT);
    // const service = new UserService();
    // const newToken = await service.createToken({email: 'anurag123@gmail.com', id: 1});
    // console.log("new token is", newToken);
    // const response = service.verifyToken(newToken);
    // console.log(response);
});
