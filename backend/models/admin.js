const mongoose = require('mongoose')
 
const adminSchema = new mongoose.Schema({
    
    Gmail: { type: String},
    Password: { type: String},
   
})
 
module.exports = mongoose.model('Admin',adminSchema)