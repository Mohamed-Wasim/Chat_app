import { messageModel } from "../Model/messageModel.js";
import { conversationModel } from "../Model/converstationModel.js";

// Sending message
export const sendMessage = async (req, res) => {
  try {
    // Getting senderId, reciverId and message
    const senderId = req.id;
    const reciverId = req.params.id;
    const message = req.body.message;

    // Find the senderId and reciverId in conversation model
    let getConversation = await conversationModel.findOne({
      participants: { $all: [senderId, reciverId] },
    });

    // Add the senderId and reciverId in conversation model It does'n exist
    if (!getConversation) {
      getConversation = await conversationModel.create({
        participants: [senderId, reciverId],
      });
    }

    // Create the message in message model
    const newMessage = await messageModel.create({
      senderId,
      reciverId,
      message,
    });

    // Now push the messageId into conversation model
    if (newMessage) {
      getConversation.messageId.push(newMessage._id);
    }

    // And save the conversation model
    await getConversation.save();

    // socket io

    // Send the response and status code message sended successfully
    return res.status(200).json({
      message: "message sended successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json("internal server error");
  }
};

// Getting message
export const gettingMessage = async (req, res) => {
  try {
    const reciverId = req.params.id;
    const senderId = req.id;
    const getConversation = await conversationModel
      .findOne({
        participants: {
          $all: [senderId, reciverId],
        },
      })
      .populate("messageId");
    console.log(getConversation);
    return res.status(200).json({ data: getConversation });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
