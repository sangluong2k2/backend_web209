const mongoose = require("mongoose")
,{Schema } = require("mongoose")
,{ObjectId } = require("mongoose")
const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    price:{
        type: String,
        required: true
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    image: {
        type: []
    },
    decription: {
        type: String
    },
    sold: {
        type: Number
    }
}, {timestamps: true})
productSchema.index({ "$**": "text" })
module.exports = mongoose.model("Product", productSchema)