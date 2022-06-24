const mongoose = require('mongoose')
 
const pendingtransaction = new mongoose.Schema({
    
    Id: { type: String},
    ToId: { type: String},
    SendMoney: { type: String},
   
})
 
module.exports = mongoose.model('Ptransaction',pendingtransaction)