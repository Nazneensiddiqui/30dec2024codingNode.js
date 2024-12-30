const stuModel=require("../models/stuModel")
const DataSave=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
   const  mydata=await stuModel.create({
    rollno:rollno,
    name:name,
    city:city,
    fees:fees
   })
   res.send(mydata)
   console.log(mydata)
    
}

module.exports={
    DataSave
}