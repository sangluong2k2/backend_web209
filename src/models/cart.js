const mongoose = require("mongoose")
,{Schema } = require("mongoose")
,{ObjectId } = require("mongoose")
const cart = new Schema({
    idProduct: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: String
    },
    uId: {
        type: ObjectId,
        ref: "User"
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true })
module.exports = mongoose.model("Cart", cart)