const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
    w_name:{
       type: String,
       required: true,
    },
    w_req:{
        type: String,
        required: true,
    },
    w_rate:{
        type: Number,
        required: true,
    },
    w_des:{
        type: String,
        required: true,
    },
    c_name:{
        type: String,
        required: true,
     },
    c_number:{
        type: Number,
        required: true,
    },
    e_mail:{
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("WorkData",workSchema);