const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema({
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

module.exports = mongoose.model('employess', Employee);

//equal to...
// const EmployDirect = mongoose.model("employees", Employee);

// module.exports = EmployDirect;