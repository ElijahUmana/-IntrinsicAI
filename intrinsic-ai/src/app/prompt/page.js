"use client"
import Image from 'next/image'
import styles from '../page.module.css'
import {Form, FloatingLabel, Button} from 'react-bootstrap/';


export default function Prompt() {
    return (
        <div>
            <Form action="/tutorial" class="inline text-center">
                <h1>Hi! Welcome to Intrinsic.ai.</h1>
                <p>We're so glad you decided to start your programming journey with us! To begin, why don't you tell me a bit about what you're interested in -- have you ever wanted to make a website of any sort? You could make a website about your basketball team, or to list your favorite shows, or to make a blog. Whatever your passion is, Intrinsic.ai is here to make it a reality!</p>
                <FloatingLabel
                    controlId="floatingTextarea"
                    label="I want to learn to make a website about..."
                    className="mb-3"
                >
                    <Form.Control as="textarea" placeholder="I want to learn how to make a website about..." />
                </FloatingLabel>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
  )
}
