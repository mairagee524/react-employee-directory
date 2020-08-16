const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeShema = new Schema({
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
        required: true 
    },
    dob: { 
        type: Date, 
        required: true 
    }
});

module.exports = mongoose.model('employess', EmployeeShema);

//equal to...
// const EmployDirect = mongoose.model("employees", EmployeeShema);

// module.exports = EmployDirect;