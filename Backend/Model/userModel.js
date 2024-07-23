import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fulNm: {
        type: String,
        required: true
    },
    usrNm: {
        type: String,
        unique: true,
        required: true
    },
    pswd: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    }
}, {
    timestamps: true
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
