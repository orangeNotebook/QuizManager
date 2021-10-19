const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config(); 

const UserModel = require('./models/User')

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true,});


app.get('/', async (req, res) => {
    res.send("Hello World!")
  })

app.get('/createUser', async (req, res) => {

const user = new UserModel({userName: "Test User", password: "Test Password", salt: "Test Salt", access: "Test Access"})

try {
    await user.save();
    res.send("user created")
}catch(err) {
    console.log(err)
}
})

  app.listen(port, () => console.log(`Listening on port ${port}`)); 