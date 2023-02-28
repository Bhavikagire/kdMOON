const mongoose=require("mongoose")

const cartSchema = mongoose.Schema({
    
image:String,
tital:String,
price:Number,

})

const cartModel = mongoose.model("cart",cartSchema)

module.exports={cartModel}