const express = require('express')
const router = express.Router()
 
require('./routes/Bank')(router)
 
module.exports = router 