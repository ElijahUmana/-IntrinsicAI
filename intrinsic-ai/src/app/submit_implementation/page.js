"use client"
import React, {useState} from 'react'
//import Button from 'react-bootstrap/Button';
import postData from '../utils/postData';

export default function Implementation(){
    const [data, setData] = useState(null);
    function handleSubmission(){
        const codevar = document.forms.textinput.codeinput.value;
        console.log("codevar is " + codevar);
        postData("http://127.0.0.1:5000/submit_implementation", { code: codevar }).then((data) => {
            setData(data);
          console.log("here is data: " + JSON.stringify(data));
          console.log("here is todolist: " + data.todo_list);
        });
    }

    return(
        <div >
            <div style={{width: "50%", display: "inline-block", padding: "10px"}}>
                {data == null ? "Your feedback is loading..." : data.todo_list }
            </div >
            <div style={{width: "50%", display: "inline-block"}}>
                <form name="textinput"> 
                    <h4>Enter your code here:</h4>
                    <textarea name="codeinput" style={{ width: "100%", padding: "10px" }}></textarea>
                    <button type="button" style={{ background: "blue", border: "none", color: "white", borderRadius: "5px", padding: "5px", float: "right", margin: "10px" }} onClick={handleSubmission}>Submit</button>
                </form>
            </div>
        </div>
    )
}