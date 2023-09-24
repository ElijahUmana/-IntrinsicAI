"use client"
import Image from 'next/image'
import styles from '../page.module.css'
import { Form, FloatingLabel, Button } from 'react-bootstrap/';
import { redirect } from 'next/navigation'
import postData from '../utils/postData';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Tutorial from '../lessons/page';
import Link from 'next/link';

export default function Prompt() {
    const [data, setData] = useState(null);
    const router = useRouter();

    function handleClick() {
        const formvar = document.forms.promptform.prompttext.value;
        console.log("here is the info: " + formvar);
        
        postData("http://127.0.0.1:5000/submit_project", { description: formvar }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
        setData(data);
        console.log("here is the description: " + data.description);
        const course_summary = data.course_summary;
    });
    }

    return (
        <div>
            <Form name="promptform" class="inline text-center">
                <h1>Hi! Welcome to Intrinsic.ai.</h1>
                <h1>{data ? data.status : ''}</h1>
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
            {data && (
        <>
            <h1>{data.description || ''}</h1>
            <p>{data.message || ''}</p>
            <p>{data.suggestion || ''}</p>
            <h2>Here is the course outline:</h2>
            {data.course_outline && data.course_outline.map(item => (
                <p key={item}>{item}</p>
            ))}
                    <Link href="/lessons">
                        <Button variant="success">Continue</Button>{' '}
                    </Link>
        </>
    )}
        </div>
  )
}
