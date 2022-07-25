import mongoose, {Schema, ObjectId } from "mongoose";
const cart = new Schema({
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
    user: {
        type: ObjectId,
        ref: "User"
    },
    quantity: {
        type: Number,
        required: true
    },
    order:{
        type: ObjectId,
        ref:"Order"
    }
}, {timestamps: true})
export default mongoose.model("Cart", cart)