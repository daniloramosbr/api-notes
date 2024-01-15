import login from "../models/login.js"
import Jwt  from "jsonwebtoken"

export const createLogin = (body) => login.create(body)
export const findLogin = () => login.find()
export const findEmail = (email) => login.find({email: email})

export default function generateToken(id, user) {
    return Jwt.sign({ id: id, 
    user: user }, process.env.SECRET, { expiresIn: 86400 });
  }
  