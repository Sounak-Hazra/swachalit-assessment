// title (string)
// content (string)
// createdAt (auto-generated)

import mongoose from "mongoose"

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    content: {
        type: String,
        required: true 
    },
     createdAt: {
        type: Date,
        default: Date.now()
     }
})


export default mongoose.model("notes", noteSchema)