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
        <div>
            <div >
                {data == null ? "Loading..." : data.todo_list }
            </div>
            <div >
                <form name="textinput">
                    <textarea name="codeinput" rows="5" cols="33"></textarea>
                    <button type="button" onClick={handleSubmission}>Submit</button>
                </form>
            </div>
        </div>
    )
}