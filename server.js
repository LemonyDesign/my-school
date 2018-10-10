const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const {getStudents, getStudentById, postStudents} = require('./storage');

app.get('/students', function(req, res){
 const students = getStudents();
 res.json(students);
});

app.get('/students/:studentId', function(req, res){
const student = getStudentById(req.params.studentId);
 if(student) {
    res.json(student)
 } else {
     res.status(404).json({error: "No student with this ID"})
 }

});

app.post('/students', function(req, res){
    const addStudent = postStudents(req.body);
    res.json(addStudent)
});

app.put('/students/:studentId', function(req, res){

});

app.patch('/students/:studentId', function(req, res){

});

app.delete('/students/:studentId', function(req, res){

});


app.listen(8080, function(){
    console.log("listening on port 8080");
});
