"use client"
import postData from "../utils/postData"
import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap/';

export const MyComponent = () => {
    const [data, setData] = useState(null);
  }
function Tutorial(outline_array) {
    console.log(outline_array);
    let fin = "not_end_of_tutorials"
    
    // const [data, setData]=useState(null);
    const [data, setData]=[null,null];
    function nextLesson(outline) {
        postData("http://127.0.0.1:5000/next_tutorial", {
            course_outline: outline
        }).then((data) => {
            setData(data);
            console.log(data);
            fin = data.status

        });
    }
    nextLesson(outline_array);
    if ({fin} != "end_of_tutorials") {
    return (
        <div>
                // <div>
                //     {/* <h1>Lesson {data.topic}</h1>
                //     <p>{data.content}</p> */}
                // </div>
                <div className="d-grid gap-2">
                <Form action="/prompt" class="inline">
                    <Button type="button" onClick={nextLesson(outline_array)} >Submit</Button>
                </Form>
            </div>
            </div>
            )
            }
            else {
                return (
                <div>
    <h1>Congrats! You've finished the lessons. Now, show what you know!</h1>
    <div className="d-grid gap-2">
      <Form action="/submit_implementation" class="inline">
          <Button variant="primary" size="lg" type="submit">Final Project!</Button>
      </Form>
      </div>
      </div>
                )
            }
}

export default Tutorial;