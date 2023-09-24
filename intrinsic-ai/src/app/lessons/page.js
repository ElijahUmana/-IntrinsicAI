"use client"
import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import fetchCourseOutline from '../utils/getOutline';
import postData from '../utils/postData'; // Ensure you have imported postData
import getOutline from '../utils/getOutline';

const {lessons} = require('../prompt/page.js');

// async function generateLessons() {
//             const course_outline = await postData("http://127.0.0.1:5000/submit_project");
//             console.log(course_outline)
//             let tempLessons = [];
 
//             const data = await getOutline("http://127.0.0.1:5000/next_tutorial");
//             console.log(data);

//             for (let i = 0; i < course_outline.length; i++) {
//                 const data = await postData("http://127.0.0.1:5000/next_tutorial", {
//                     current_page: i,
//                     course_outline: course_outline
//                 });
//                 console.log("LESSON "+data);
//                 tempLessons.push({ topic: data.topic, content: data.content });
//             }

//             setLessons(tempLessons);
//         }

async function Tutorial() {
    const [lessons, setLessons] = useState([]);
    //generateLessons();

    const data = await getOutline("http://127.0.0.1:5000/next_tutorial");
    console.log(data);

    return (
        <Tabs defaultActiveKey="1" id="fill-tab-example" className="mb-3" fill>
            {lessons.map((lesson, i) => (
                <Tab key={i + 1} eventKey={`${i + 1}`} title={`Lesson ${i + 1}`}>
                    <h2>{lesson.topic}</h2>
                    <p>{lesson.content}</p>
                </Tab>
            ))}
        </Tabs>
    );
}

export default Tutorial;
