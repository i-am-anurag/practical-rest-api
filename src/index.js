const express = require('express');
const { PORT } = require('../src/config/server-config');

const app = express();


app.listen(PORT,()=>{
    console.log("Server is running on PORT no:",PORT);
});