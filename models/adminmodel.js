const mongoose=require("mongoose")

const adminSchema = mongoose.Schema({
firstname  : String,
lastname  : String,
mmddyy:String,
zipcode:Number,
gender : String,
email : String,
password : String,
mobilenumber : Number

})

const adminModel = mongoose.model("admin",adminSchema)

module.exports={adminModel}