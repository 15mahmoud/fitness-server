// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(token);
    const decode = jwt.verify(token, "islam500");
    console.log(decode);

    const user = await User.findOne({ _id: decode._id, tokens: token });
    console.log(user);
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};
