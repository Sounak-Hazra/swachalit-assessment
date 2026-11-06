// const express = require("express");
import express from "express"
import mongoose from "mongoose";
const app = express();
import notes from "./models/notes.ts";
import cors from "cors"

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/api/notes", async (req, res)=>{
  console.log(req.body)
  const {title, content} = await req.body
  const newNotes = new notes({
    title: title,
    content: content
  })

  await newNotes.save()

  res.send(201, {message: "Content Created"})
})

app.put("/api/notes/:id", async (req, res)=>{
  const id = req.params
  const {content} = await req.json()
  const existing = notes.findOne({_id: id})
  existing.content = content

  await existing.save()

  res.send(200, {message: "Data Updated"})
})

app.get("/api/notes/:keyword",(req, res)=>{
  const keyWord = req.params
  if(!keyWord){
    const allDocuments = notes.find({})

    res.send(200, {message: "Data Fetched successfully", data: allDocuments})
  }
  //  else{
  //   notes.find()
  // }
})

const PORT = 5000;
app.listen(PORT, () =>{
  mongoose.connect("mongodb://localhost:27017/")
  console.log(`Server running on port ${PORT}`)
});


const arr = [[1,2,3], 1]
const arr2 = [...arr]
arr2[0][1] = 3

arr3 = JSON.parse(JSON.stringify(arr))
