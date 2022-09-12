const mongoose = require("mongoose")
,{Schema } = require("mongoose")
,{ObjectId } = require("mongoose")
const { createHmac } = require("crypto");
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
},{ timestamps: true} );

userSchema.methods = {
    authenticate(password){
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password){
        if(!password) return
        try {
            return createHmac('sha256', "abc").update(password).digest('hex');
        } catch (error) {
            console.log(error);
        }
    }
}
userSchema.pre("save", function(next){
    try {
        this.password = this.encrytPassword(this.password);
        next();
    } catch (error) {
        
    }
})

module.exports = mongoose.model("User", userSchema);