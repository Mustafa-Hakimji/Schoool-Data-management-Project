const mongoose = require('mongoose');

const studentSchema = mongoose.Schema([{
    name:String,
    surname:String,
    father:String,
    mother:String,
    adhaar:String,
    phone:String,
    sssm:String,
    bank:String,
    ifsc:String
}]);

const Student = mongoose.model('classUKG',studentSchema);

module.exports = Student;