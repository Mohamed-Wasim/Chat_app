import jwt from "jsonwebtoken";

const isAuthenticate = async (req, res, next) => {
  try {
    // Getting token from request cookies
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ message: "user not authenticated" });
    }
    // Now we have to decode the token
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    // If token will generated if condition not work.
    if (!decode) {
      return res.status(400).json({ message: "invalid token" });
    }

    // Now we set request id = decode id.
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

export default isAuthenticate;
