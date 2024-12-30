const express=require("express");
const app=express()
const port=8000;

const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const stuRoute=require("./Routes/stuRoute")

mongoose.connect("mongodb://127.0.0.1:27017/Hiba").then((res)=>{
    console.log("DB Connected");
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use("/students",stuRoute)

app.listen(port ,()=>{
    console.log(`server run on ${port}`);
})