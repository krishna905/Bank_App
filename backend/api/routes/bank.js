const Admin =require('../../models/admin')
const User = require('../../models/user')
const Transaction = require('../../models/Transaction')
const Ptransaction=require('../../models/pendingtransaction')
module.exports = function (router) {
    //Admin
    //GET 
    router.get('/getadmin',function(req,res){
        Admin.find({},(err,admin)=>{
            if(err){
                res.json({success: false ,message:err});
            } else {
                if(!Admin){
                    res.json({ success: false , message :"No admin found"});
                }else {
                    res.json({ success:true , admin: admin});
                }
            }
        })
    })
    router.get('/getadmin/:id',function(req,res){
        Admin.find({Gmail: req.params.id},(err,admin)=>{
            if(err){
                res.json({success: false ,message:err});
            } else {
                if(!admin){
                    res.json({ success: false , message :"No admin found"});
                }else {
                    res.json({ success:true , admin: admin});
                }
            }
        })
    })

 
    //post: get new meeting note document..
    router.post('/createadmin',function(req,res){
        let note = new Admin(req.body)
        note.save(function (err, note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

//Put
router.put('/updateadmin/:id',(req,res)=>{
    if(!req.params.id){
        res.json({success: false , message: 'No Id is provided'});
    } else {
       Admin.findOne({AId: req.params.id},(err,admin)=>{
            if(err){
                res.json({ success:false, message: 'Not a valid Admin id'});
            }else {
                
                admin.AId=req.body.AId;
                admin.Gmail=req.body.Gmail;
                admin.Password=req.body.Password;
                admin.save((err)=>{
                    if(err){
                        res.json({success: false,message:err});
                    } else {
                        res.json({success: true , message: 'admin Updated'});
                    }
                });

            }
        });
    }
});

    //users
  //GET 
  router.get('/getuser',function(req,res){
    User.find({},(err,user)=>{
        if(err){
            res.json({success: false ,message:err});
        } else {
            if(!user){
                res.json({ success: false , message :"No user found"});
            }else {
                res.json({ success:true , user:user});
            }
        }
    })
})
router.get('/getuser/:id',function(req,res){
    User.find({UId: req.params.id},(err,user)=>{
        if(err){
            res.json({success: false ,message:err});
        } else {
            if(!user){
                res.json({ success: false , message :"No user found"});
            }else {
                res.json({ success:true , user:user});
            }
        }
    })
})
router.get('/getuserlog/:id',function(req,res){
    User.find({Email: req.params.id},(err,user)=>{
        if(err){
            res.json({success: false ,message:err});
        } else {
            if(!user){
                res.json({ success: false , message :"No user found"});
            }else {
                res.json({ success:true , user:user});
            }
        }
    })
})



//post: get new meeting note document..
router.post('/createuser',function(req,res){
    let note = new User(req.body)
    note.save(function (err, note){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(note)
    })
})

//Put
router.put('/updateuser/:id',(req,res)=>{
    if(!req.params.id){
        res.json({success: false , message: 'No Id is provided'});
    } else {
       User.findOne({UId: req.params.id},(err,user)=>{
            if(err){
                res.json({ success:false, message: 'Not a valid user id'});
            }else {
                
                user.UId=req.body.UId;
                user.Name=req.body.Name;
                user.AccNum=req.body.AccNum;
                user.Age=req.body.Age;
                user.Email=req.body.Email;
                user.Contact=req.body.Contact;
                user.BankBal=req.body.BankBal;
                user.save((err)=>{
                    if(err){
                        res.json({success: false,message:err});
                    } else {
                        res.json({success: true , message: 'user Updated'});
                    }
                });

            }
        });
    }
});

//delete
router.delete('/deleteuser/:id',(req,res)=>{
    if(!req.params.id){
        res.json({success:false , message: 'No id provided'});

    } else {
        User.findOne({UId:req.params.id},(err,user)=>{
            if(err){
                res.json({success:false , message: "invalid id"});
            } else {
                user.remove((err)=>{
                    if(err){
                        res.json({success: false,message:err});
                    } else {
                        res.json({success:true,message:'user deleted'});
                    }
                });
            }
        });
    }
});


    //transactions
  //GET 
  router.get('/gettransaction',function(req,res){
    Transaction.find({},(err,transaction)=>{
        if(err){
            res.json({success: false ,message:err});
        } else {
            if(!transaction){
                res.json({ success: false , message :"No transaction found"});
            }else {
                res.json({ success:true , transaction:transaction});
            }
        }
    })
})
router.get('/gettransaction/:id',function(req,res){
    Transaction.find({TId: req.params.id},(err,transaction)=>{
        if(err){
            res.json({success: false ,message:err});
        } else {
            if(!transaction){
                res.json({ success: false , message :"No transaction found"});
            }else {
                res.json({ success:true , transaction:transaction});
            }
        }
    })
})


//post: get new meeting note document..
router.post('/createtransaction',function(req,res){
    let note = new Transaction(req.body)
    note.save(function (err, note){
        if(err){
            return res.status(400).json(err)
        }
        res.status(200).json(note)
    })
})

//Put
router.put('/updatetransaction/:id',(req,res)=>{
    if(!req.params.id){
        res.json({success: false , message: 'No Id is provided'});
    } else {
        Transaction.findOne({TId: req.params.id},(err,transaction)=>{
            if(err){
                res.json({ success:false, message: 'Not a valid transaction id'});
            }else {
                
                transaction.TId=req.body.TId;
                transaction.Name=req.body.Name;
                transaction.Amount=req.body.Amount;
                transaction.TDate=req.body.TDate;
                transaction.save((err)=>{
                    if(err){
                        res.json({success: false,message:err});
                    } else {
                        res.json({success: true , message: 'transaction Updated'});
                    }
                });

            }
        });
    }
});

//delete
router.delete('/deletetransaction/:id',(req,res)=>{
    if(!req.params.id){
        res.json({success:false , message: 'No id provided'});

    } else {
        Transaction.findOne({TId:req.params.id},(err,transaction)=>{
            if(err){
                res.json({success:false , message: "invalid id"});
            } else {
                transaction.remove((err)=>{
                    if(err){
                        res.json({success: false,message:err});
                    } else {
                        res.json({success:true,message:'transaction deleted'});
                    }
                });
            }
        });
    }
});
    //PendingTransaction
    //GET 
    router.get('/getptransaction',function(req,res){
        Ptransaction.find({},(err,ptransaction)=>{
            if(err){
                res.json({success: false ,message:err});
            } else {
                if(!Ptransaction){
                    res.json({ success: false , message :"No admin found"});
                }else {
                    res.json({ success:true , ptransaction: ptransaction});
                }
            }
        })
    })
   
    //post: get new meeting note document..
    router.post('/createptransaction',function(req,res){
        let note = new Ptransaction(req.body)
        note.save(function (err, note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })
//delete
router.delete('/deleteptransaction/:id',(req,res)=>{
    if(!req.params.id){
        res.json({success:false , message: 'No id provided'});

    } else {
        Ptransaction.findOne({Id:req.params.id},(err,ptransaction)=>{
            if(err){
                res.json({success:false , message: "invalid id"});
            } else {
                ptransaction.remove((err)=>{
                    if(err){
                        res.json({success: false,message:err});
                    } else {
                        res.json({success:true,message:'transaction deleted'});
                    }
                });
            }
        });
    }
});
    
}