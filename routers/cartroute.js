const express = require("express")
const cartRouter = express.Router()


const {cartModel} = require("../models/cartmodel")

cartRouter.get("/", async (req, res) => {
    let query = req.query
    try {
        let cart = await cartModel.find(query)
        res.send(product)
    } catch (error) {
        res.send(error)
    }
})

// pp.get("/product", async (req, res) => {
//     let query = req.query
//     try {
//         let product = await productModel.find(query)
//         res.send(product)
//     } catch (error) {
//         res.send(error)
//     }
// })

// productRouter.get("/top", async (req, res) => {
    
//     try {
//         let product = await productModel.find({comments})
//         res.send(product)
//     } catch (error) {
//         res.send(error)
//     }
// })

// productRouter.post("/create",async(req,res)=>{
//     const payload = req.body
//    try {
//     const product = new productModel(payload)
//     await product.save() 
//     res.send({"msg":"new product created"})
//     console.log("new product")
//    } catch (error) {
//     res.send({"msg":error.message})
//     console.log("somthing wrong")
//    }
// })




// productRouter.delete("/delete/:id", async (req, res) => {
//     const ID = req.params.id

//     try {
//         await productModel.findByIdAndDelete({ _id: ID })
//         res.send("product deleted")

//     } catch (error) {
//         res.send(error)

//     }
// })

// productRouter.patch("/update/:id", async (req, res) => {
//     const ID = req.params.id
//     const payload = req.body
//     try {
//         await productModel.findByIdAndUpdate({ _id: ID }, payload)
//         res.send("product updated")

//     } catch (error) {
//         res.send(error)
//     }
// })

module.exports={cartRouter}