const express = require ("express");
const router = express.Router();
const db = require("../models")

router.post("/users",(req,res,next)=>{
    console.log("req",req.body);
    const data = req.body
    db.users.create({
        name:data.name,
        enterprise:data.enterprise,
        city:data.city,
        email:data.email,
        tele:data.tel,
        help:data.help,
        comenta:data.comenta
    }).then(submitedUser=>res.send(submitedUser))
})
module.exports = router;