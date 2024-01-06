import user from "../models/user.js";

export const create = (body) => user.create(body)
export const findAll = () => user.find()
export const findId = (id) => user.findById(id)
export const deleteService = (id) => user.findOneAndDelete({_id: id})
export const updateId = (id, text) => user.findByIdAndUpdate({_id: id}, {text})