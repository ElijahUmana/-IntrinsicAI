"use client"
import Image from 'next/image'
import styles from '../page.module.css'
import { Form, FloatingLabel, Button } from 'react-bootstrap/';
import { redirect } from 'next/navigation'

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).catch(error => {
        console.log("There was a problem with the fetch operation:", error.message);
    });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function Prompt() {

    function handleClick() {
        const formvar = document.forms.promptform.prompttext.value;
        console.log("here is the info: " + formvar);
        
        postData("http://127.0.0.1:5000/submit_project", { description: formvar }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
        });

    // fetch(url, {
    //     method: "POST",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     body: JSON.parse('{"description": "' + formvar + '" }'),  // This sends all form data. If you just want to send the 'prompttext', you might need a different approach
    //     headers: {
    //          // Specify the Content-Type for FormData
    //          "Content-Type": "application/json"
    //     }
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log(data);
    //     redirect('/tutorial');  // Now we redirect after the fetch completes and logs data
    // })
    }

    return (
        <div>
            <Form name="promptform" class="inline text-center">
                <h1>Hi! Welcome to Intrinsic.ai.</h1>
                <p>We're so glad you decided to start your programming journey with us! To begin, why don't you tell me a bit about what you're interested in -- have you ever wanted to make a website of any sort? You could make a website about your basketball team, or to list your favorite shows, or to make a blog. Whatever your passion is, Intrinsic.ai is here to make it a reality!</p>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="I want to learn to make a website about..."
                    className="mb-3"
                >
                    <Form.Control as="textarea" name="prompttext" placeholder="I want to learn how to make a website about..." />
                </FloatingLabel>
                <Button type="button" onClick={handleClick} >Submit</Button>
            </Form>
        </div>
  )
}
