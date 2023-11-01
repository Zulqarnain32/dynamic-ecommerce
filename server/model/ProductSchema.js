const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    productName:{
        type:String
    },
    productDes:{
        type:String
    },
    image:{
        type:String,
    }
   
})
const ProductModel = mongoose.model('ProductModel',ProductSchema)
module.exports = ProductModel