import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    messageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message"
    },
    participants:[{
            senderId:{type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        reciverId:{type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
    }]
});

export const conversationModel = mongoose.model("conversation",conversationSchema);