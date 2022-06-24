const mongoose = require('mongoose')
 
const userSchema = new mongoose.Schema({
    UId: { type: String},
    Name: { type: String},
    AccNum: { type: String},
    Age: {type: String},
    Email: { type: String},
    Contact: { type: String},
    BankBal: { type: String},
    Password: { type: String},
})
 
module.exports = mongoose.model('user',userSchema)