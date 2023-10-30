const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    title:{
        type:String
    },
    postData:{
        type:String
    },
    image:{
        type:String,
    }
   
})
const ProductModel = mongoose.model('ProductModel',ProductSchema)
module.exports = ProductModel