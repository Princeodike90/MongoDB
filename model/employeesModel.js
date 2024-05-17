
const mongoose = require("mongoose")

const employeesSchema = new mongoose.Schema({

    name: {type: String, require},

    position: {type: String, require},

    department: {type: String, require},

    email: {type: String, require},

    phone: {type: String, require}


})

const employees = new mongoose.model("Employee", employeesSchema)



module.exports = employees