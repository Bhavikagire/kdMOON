const express = require("express")
const adminRouter = express.Router()
const { adminModel } = require("../models/adminmodel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")



adminRouter.get("/", async (req, res) => {
    try {
        let admin = await adminModel.find()
        res.send(admin)
    } catch (error) {
        res.send(error)
    }
})


adminRouter.post("/adminregister", async (req, res) => {
   

    const {  firstname,lastname,mmddyy,zipcode,gender,email,password,mobilenumber  } = req.body

    try {
        const admin = await adminModel.find({ email })
        if (admin.length > 0) {
            res.send("admin already exist, please login")
            console.log("admin already exist, please login")
        }
        else{
            bcrypt.hash(password, 5, async (err, hash) => {
                if (err) res.send(err)
                else {
                    const admin = new adminModel({firstname,lastname,mmddyy,zipcode,gender,email,mobilenumber,password: hash })
                    await admin.save()
                    res.send("admin register")
                    console.log("admin registerd successfully")
                }
            })
        }
       

    } catch (error) {
        res.send(error)
    }
})

adminRouter.post("/adminlogin", async (req, res) => {
    const { email, password } = req.body
    try {
        const admin = await adminModel.find({ email })
        if (admin.length > 0) {
            bcrypt.compare(password, admin[0].password, (err, result) => {
                if (result) {
                    let token = jwt.sign({ userID: admin[0]._id }, "masai")
                    res.send({ "msg": "login success", "token": token })
                }
                else {
                    res.send("wrong details")
                }
            })
        }
        else {
            res.send("something is wrong")
        }
    } catch (error) {
        res.send(error)
    }
})





// adminRouter.patch("/update/:id", async (req, res) => {
//     const ID = req.params.id
//     const payload = req.body
//     try {
//         await productModel.findByIdAndUpdate({ _id: ID }, payload)
//         res.send("product updated")

//     } catch (error) {
//         res.send(error)
//     }
// })

module.exports = { adminRouter }