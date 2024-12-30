import { useState } from "react";
import axios from "axios";

const App=()=>{
    const[Input,setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values , [name]:value}))
    }
    const handleSubmit=()=>{
        let api = "http://localhost:8000/students/datasave"
       axios.post(api, Input).then((res)=>{
        console.log(res.data);
        alert("data save!!!")
        setInput("")
        
       })
    }

    return(
        <>
        <center>
            <div style={{width:"50%" , height:"500px" , backgroundColor:"green", fontSize:"16px" , border:"1px solid red", marginTop:"50px"}}>
            <h1>Insert Form</h1>
            Enter Student Rollno : <input type="text" name="rollno" value={Input.rollno} onChange={handleInput}/><br/><br/><br/><br/>
            Enter Student Name : <input type="text" name="name" value={Input.name} onChange={handleInput}/><br/><br/><br/><br/>
            Enter Student City : <input type="text" name="city" value={Input.city} onChange={handleInput}/><br/><br/><br/><br/>
            Enter Student Fees : <input type="text" name="fees" value={Input.fees} onChange={handleInput}/><br/><br/><br/><br/>
           <button onClick={handleSubmit}>Data Save</button>
           </div>
        </center>
        </>
    )
}
export default App;