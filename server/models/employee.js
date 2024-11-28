const mongoose = require("mongoose")

const Employeschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const EmployeeModel = mongoose.model("employees", Employeschema)
module.exports = EmployeeModel