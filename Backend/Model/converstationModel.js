import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  messageId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
  ],
});

export const conversationModel = mongoose.model(
  "conversation",
  conversationSchema
);
