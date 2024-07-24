import bcrypt from "bcryptjs";
import userModel from "../Model/userModel.js";
import jwt from "jsonwebtoken";

// User registration
export const userRegistration = async (req, res) => {
  try {
    // Destructuring  the request
    const { fulNm, usrNm, pswd, cnfrmPswd, profilePhoto, gender } = req.body;
    //    Check all field are require
    if (!fulNm || !usrNm || !pswd || !cnfrmPswd || !profilePhoto || !gender) {
      return res.status(400).json({ message: "all field are required" });
    }
    //    Check the password match
    if (pswd !== cnfrmPswd) {
      return res.status(400).json({ message: "password does not match" });
    }
    //    Check the user is already exist
    const userExist = await userModel.find({ usrNm });
    if (userExist.length > 0) {
      return res.status(400).json({ message: "user is already exist" });
    }
    //    Hashed password
    const hashedPassword = await bcrypt.hash(pswd, 10);
    //   Set user profile photo
    const maleProfilePhoto = `https://avatar.iran.liara.run/public?username=boy`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public?username=girl`;
    //    Create new user
    const newUser = new userModel({
      fulNm,
      usrNm,
      pswd: hashedPassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
      gender,
    });
    await newUser.save();
    return res.status(200).json({ message: "user saved successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error);
  }
};

// User login
export const userLogin = async (req, res) => {
  try {
    // Destructuring the request
    const { usrNm, pswd } = req.body;
    // Check the field are required
    if (!usrNm || !pswd) {
      return res.status(400).json({ message: "all fields are required" });
    }
    // Find the user name and get the user password
    const userData = await userModel.findOne({ usrNm });
    if (userData.length <= 0) {
      return res.status(400).json({ message: "user does not exists" });
    } else {
      // Matches the password
      const isPswd = await bcrypt.compare(pswd, userData.pswd);
      // If the password matches
      if (isPswd) {
        const tokenData = {
          userId: userData._id,
        };
        // Create the JWT token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        // Create the response data
        const resData = {
          _id: userData._id,
          fulNm: userData.fulNm,
          usrNm: userData.usrNm,
          profilePhoto: userData.profilePhoto,
          gender: userData.gender,
        };
        // Set the token into the cookies and send the response data
        return res
          .status(200)
          .cookie("token", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSight: "strict",
          })
          .json({ message: "user login successfully", data: resData });
      } else {
        return res.status(400).json({ message: "user password is incorrect" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: `internal server error. ${error.message}` });
  }
};

// User logout
export const userLogout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "logout successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

// Get otherUser endPoint
export const getOtherUsers = async (req, res) => {
  try {
    // Get request id from isAuthenticate
    const loginUserId = req.id;
    // Getting otherUserId
    const otherUser = await userModel
      .find({ _id: { $ne: loginUserId } })
      .select("-password");
    return res.status(200).json(otherUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
