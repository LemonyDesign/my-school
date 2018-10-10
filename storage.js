const storage = {
    students : {
        1: {
            id: 1,
            student: "Matt" 
        },
        2: {
            id: 2,
            student: "Mel" 
        },        
        3: {
            id: 3,
            student: "Jim" 
        },
    }
};

function getStudents(){
return storage.students
}

function getStudentById(studentId) {
    return storage.students[studentId]
}
function postStudents(newStudentBody) {
    const studentIdArray = Object.keys(storage.students);
    const nextStudentId = Math.max(...studentIdArray) + 1;
    newStudentBody.id = nextStudentId;
    const newStudent = Object.assign({}, newStudentBody);
   
    return storage.students[nextStudentId] = newStudent
}

module.exports = {getStudents,getStudentById, postStudents}