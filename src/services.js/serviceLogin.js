import login from "../models/login.js"
import Jwt  from "jsonwebtoken"

export const createLogin = (body) => login.create(body)
export const findLogin = () => login.find()


export default function generateToken(id) {
    return Jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });
  }
  