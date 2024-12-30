const express=require("express");
const route=express.Router();
const stuControler=require("../Contoralers/stuControler")

route.post("/datasave",stuControler.DataSave)

module.exports=route;