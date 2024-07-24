import { messageModel } from "../Model/messageModel.js";
import { conversationModel } from "../Model/converstationModel.js";

export const sendMessage = async (req, res) => {
  try {
    // Getting senderId, reciverId and message
    const senderId = req.id;
    const reciverId = req.params.id;
    const message = req.body;

    // Coversation between whom - getting conversations
    let getConversation = await conversationModel.findOne({
      participants: { $all: [senderId, reciverId] },
    });
    if (!getConversation) {
      getConversation = await conversationModel.Create({
        participants: [senderId, reciverId],
      });
    }
    const newMessage = await messageModel.create({
      senderId,
      reciverId,
      message,
    });

    if (newMessage) {
      getConversation.messageId.push(newMessage._id);
    }

    await gotConversation.save();

    // socket io

    return res.send(200).json({
      message: "message sended successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.send(500).json("internal server error");
  }
};
