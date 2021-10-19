const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000; 
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config(); 

const UserModel = require('./models/User')
const QuizModel = require('./models/Quiz')

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true,});


app.get('/', async (req, res) => {
    res.send("Hello World!")
  })

  app.post('/createUser', async (req, res) => {
    const userName = req.body.userName
    const password = req.body.password
    const salt = req.body.salt
  
    const user = new UserModel({userName: userName, password: password, salt: salt, access: "restricted"})
  
    try {
      await user.save();
      res.send("user created")
    }catch(err) {
      console.log(err)
    }
  })

  app.get('/readUserNames', async (req, res) => {
    UserModel.find({}, {"userName": 1}, (err, result)=>{
      if (err){
        res.send(err)
      }
  
      res.send(result)
  
    })
  })

  app.get('/readUsers', async (req, res) => {
    UserModel.find({}, (err, result)=>{
      if (err){
        res.send(err)
      }
  
      res.send(result)
  
    })
  })

  //Quiz and question requests

  app.get('/createQuiz', async (req, res) => {
    const name = "Test Quiz"
    const questions = [{name: "Test question 1", questions: [
        {id: "A", answer: "Test answer A"}, {id: "B", answer: "Test answer B"}, {id: "C", answer: "Test answer C"}
    ], answer: "B"}]
    
    const quiz = new QuizModel({
      name: name, 
      questions: questions
    })
  
    try {
      await quiz.save();
      res.send("quiz created")
    }catch(err) {
      console.log(err)
    }
  })

  app.listen(port, () => console.log(`Listening on port ${port}`)); 