const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        required: true
    },
 
});

const Quiz = mongoose.model("Quiz", QuizSchema)
module.exports = Quiz

