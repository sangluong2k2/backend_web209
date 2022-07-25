import mongoose, {Schema , ObjectId} from "mongoose";

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

export default mongoose.model("Order" , OrderShema)