import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    reciverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        requrie:true
    },
    message:{
        type:String,
        require:true
    }
});

export const messageModel = mongoose.model("message",messageSchema);