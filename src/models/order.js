const mongoose = require("mongoose")
,{Schema } = require("mongoose")
,{ObjectId } = require("mongoose")
const OrderShema = new Schema ({
    name:{
        type: String
    },
    address: {
        type:String
    },
    phone:{
        type:Number
    },
    note:{
        type:String
    },
    user:{
        type: ObjectId,
        ref:"User"
    },
    status:{
        type:Number,
        default:0
    }
}, {timestamps:true})

module.exports = mongoose.model("Order" , OrderShema)