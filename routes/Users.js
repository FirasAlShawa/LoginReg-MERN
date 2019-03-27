const express = require("express")
const users = express.Router();
const cors = require("cors")
const jwt  = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")

const User = require("../models/User")


users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register',(req,res) => {
    const today = new Date();

    const userData = {
        first_name : req.body.first_name,
        last_name  :req.body.last_name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
        created : today
    }

    User.findOne({
        email : req.body.email
    })
    .then(user =>{
        if(!user){
            bcryptjs.hash(req.body.password,10,(err,hash)=>{
                userData.password = hash 
                User.create(userData)
                .then(user =>{
                    res.json({status :user.email + 'registered'})
                })
                .catch(err =>{
                    res.send('error : ' + err)
                })
            })
        }else{
            res.send({error : "User already exists !"})
        }
    }).catch(err =>{
        res.send("error : " + err)
    })
})

module.exports = users