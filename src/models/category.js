const mongoose = require("mongoose")
,{Schema } = require("mongoose")
,{ObjectId } = require("mongoose")
const categorySchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: true
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index:true
    },
},{timestamps: true});

module.exports = mongoose.model("Category", categorySchema)
