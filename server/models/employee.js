const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: Number, 
        required: true 
    },
    email: { 
        type: String, 
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    dob: { 
        type: Date, 
        required: true 
    }
});

module.exports = mongoose.model('employees', EmployeeSchema);

//equal to...
// const EmployDirect = mongoose.model("employees", EmployeeSchema);

// module.exports = EmployDirect;