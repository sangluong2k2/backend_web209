import mongoose, {Schema, ObjectId } from "mongoose";
const cart = new Schema({
    idProduct: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    price:{
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
}, {timestamps: true})
export default mongoose.model("Cart", cart)