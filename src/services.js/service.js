import notes from "../models/notes.js";

export const create = (body) => notes.create(body)
export const findAll = () => notes.find()
export const findId = (id) => notes.findById(id)
export const deleteService = (id) => notes.findOneAndDelete({_id: id})
export const updateId = (id, text) => notes.findByIdAndUpdate({_id: id}, {"title": text.title,
"note": text.note})