const mongoose=require("mongoose")

const productSchema = mongoose.Schema({
    
image:String,
tital:String,
rating:String,
price:Number,
    
})

const productModel = mongoose.model("product",productSchema)

module.exports={productModel}