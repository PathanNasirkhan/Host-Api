const mongoose = require("mongoose");

const productSchema = new  mongoose.Schema(
    {
    
    src:{
        type:String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    date:{
        type: String,
        required:true,
    },
    dname:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
    },
    language:{
        type: String,
        required:true,
    },
    tailer:{
        type: String,
        required:true,
    },

    }
);


module.exports = mongoose.model("Product",productSchema);