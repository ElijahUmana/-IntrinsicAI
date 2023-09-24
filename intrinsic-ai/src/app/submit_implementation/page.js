"use client"
import React, {useState} from 'react'
//import Button from 'react-bootstrap/Button';
import postData from '../utils/postData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Container>
      <Row>
                    <Col><div>To-Do: Create a College Hackathon Website Backbone
                <br></br>
Welcome to your project outline for setting up the backbone of a college hackathon website! Follow these tasks step by step to lay down a solid foundation for your site using just HTML. Once you've established this structure, you'll have a platform that's ready for further enhancements with CSS, JavaScript, and more.
<br></br>
Task 1: Set Up the Basic HTML Structure
<br></br>
 Initialize the DOCTYPE declaration.
 <br></br>
 Define the &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; tags.
 <br></br>
Task 2: Create the Website Header
<br></br>
 Add a &lt;header&gt; element.
 <br></br>
 Inside the header, include the hackathon logo using the &lt;img&gt; tag.
 <br></br>
 Add a site title with the &lt;h1&gt; tag.
 <br></br>
Task 3: Navigation Bar
<br></br>
 Integrate a &lt;nav&gt; element within the &lt;header&gt;.
 <br></br>
 Use &lt;ul&gt; and &lt;li&gt; tags to list out navigation items like Home, About, Register, Schedule, and Contact.
 <br></br>
Task 4: Main Content Area
<br></br>
 Incorporate a &lt;main&gt; tag to encapsulate the primary content.
 Create individual sections using &lt;section&gt; tags for Overview, Benefits of Joining, How to Participate, Rules, and FAQ.
 For each section, include a descriptive &lt;h2&gt; heading.
Task 5: Register Form (Basic)
<br></br>
 In the 'Register' section, add a simple form using the &lt;form&gt; tag.
 Include input fields for name, email, college name, and team members using the &lt;input&gt; tag.
 Add a submission button using the &lt;button&gt; or &lt;input type="submit"&gt; tag.
Task 6: Footer
<br></br>
 Embed a &lt;footer&gt; element at the end of the page.
 Inside the footer, provide links to the hackathon's social media profiles.
</div></Col>
                    <Col><div style={{width: "50%", display: "inline-block"}}>
                <form name="textinput"> 
                    <h4>Enter your code here:</h4>
                    <textarea name="codeinput" style={{ width: "100%",padding: "10px" }}></textarea>
                    <button type="button" style={{ background: "blue", border: "none", color: "white", borderRadius: "5px", padding: "5px", float: "right", margin: "10px" }} onClick={handleSubmission}>Submit</button>
                </form>
            </div></Col>
      </Row>
      <Row>
                    <Col><div style={{width: "50%", display: "inline-block", padding: "10px"}}>
                {data == null ? "Your feedback is loading..." : data.todo_list }
            </div ></Col>
      </Row>
    </Container>
        </div>
    )
}