const express = require('express');
const app = express();
const port = 3000;
// const User = require('./models/user')
// const jwt = require('jsonwebtoken');
// const bcrypt = require("bcrypt");
// var router = express.Router();
var userCtrl = require('./controllers/userController')
// const sendEmail = require("./controllers/sendEmail"); //mail route
require('./models');
app.use(express.json());


//********************************USERS*************************************************** */

app.get('/add' ,userCtrl.addUser ) // manually
//api route
app.get('/users' ,userCtrl.getUsers )
// for id
app.get('/users/:id' ,userCtrl.getUser )
// for post
app.post('/users' ,userCtrl.postUsers )
// for delete
app.delete('/users/:id' ,userCtrl.deleteUsers )


// mail
// app.get("/mail",sendEmail) ;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

