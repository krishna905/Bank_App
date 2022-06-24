const mongoose = require('mongoose')
 
const transactionSchema = new mongoose.Schema({
    TId: { type: String},
    Name: { type: String},
    Amount: {type: String},
    TDate: {type: Date, default: Date.now},
    
})
 
module.exports = mongoose.model('Transaction',transactionSchema)