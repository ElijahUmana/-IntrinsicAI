"use client"
import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import fetchCourseOutline from '../utils/getOutline';
import postData from '../utils/postData'; // Ensure you have imported postData
const {lessons} = require('../prompt/page.js');
import getOutline from '../utils/getOutline'; // Ensure you have imported postData
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

function Tutorial() {
    // const [lessons, setLessons] = useState([]);
    
    // useEffect(() => {
    //     async function generateLessons() {
    //         const outl = await getOutline("http://127.0.0.1:5000/get_outline");
    //         console.log("FF"+JSON.stringify(outl));
    //         // const course_outline = await fetchCourseOutline("http://127.0.0.1:5000/get_outline");
    //         // console.log(course_outline);
    //         const course_outline = await postData("http://127.0.0.1:5000/submit_project");
    //         console.log(course_outline)
    //         let tempLessons = [];
 
    //         const data = await getOutline("http://127.0.0.1:5000/next_tutorial");
    //         console.log(data);

    //         for (let i = 0; i < course_outline.length; i++) {
    //             const data = await postData("http://127.0.0.1:5000/next_tutorial", {
    //                 current_page: i,
    //                 course_outline: course_outline
    //             });
    //             console.log("LESSON "+data);
    //             tempLessons.push({ topic: data.topic, content: data.content });
    //         }

    //         setLessons(tempLessons);
    //     }

    //     generateLessons();
    // }, []);

    return (
        <div>
            
        <Tabs defaultActiveKey="1" id="fill-tab-example" className="mb-3" fill>
            {/* {lessons.map((lesson, i) => (
                <Tab key={i + 1} eventKey={`${i + 1}`} title={`Lesson ${i + 1}`}>
                    <h2>{lesson.topic}</h2>
                    <p>{lesson.content}</p>
                </Tab>
            ))} */}
            <Tab eventKey="1" title="1">
                <h2>Introduction to HTML for Creating the Backbone of a College Hackathon Website</h2>
                Tutorial: Introduction to HTML for Creating the Backbone of a College Hackathon Website

In this tutorial, we will introduce the basics of HTML, focusing on understanding the fundamental tags, elements, and structure. By the end of this tutorial, you will have a solid grasp of how HTML is used to create the backbone of a web page for a college hackathon website. <br />

What is HTML?<br />
HTML, which stands for HyperText Markup Language, is the standard language used to create and structure the content of a web page. It uses a system of tags to define the structure and elements within a webpage.<br />

The Basic HTML Structure<br />
Every HTML document begins with a specific structure:<br />


&lt;!DOCTYPE html&gt;<br />
&lt;html&gt;<br />
  &lt;head&gt;<br />
    &lt;title&gt;Your Title Here&lt;/title&gt;<br />
  &lt;/head&gt;<br />
  &lt;body&gt;<br />
    &lt;!-- Your content goes here --&gt;<br />
  &lt;/body&gt;<br />
&lt;/html&gt;<br />
Now, let's break down each part of this structure:<br />

&lt;!DOCTYPE html&gt;: This declaration tells the web browser that the document is written in HTML5, the latest version of HTML. It should be the very first line in your HTML document. <br />
<br></br>
&lt;html&gt;: The &lt;html&gt; element serves as the root of your web page. All other elements are nested inside it.
<br></br>
&lt;head&gt;: The &lt;head&gt; element contains meta-information about the document, such as the page title, character set, and links to external resources like CSS and JavaScript files.
<br></br>
&lt;title&gt;: The &lt;title&gt; element sets the title of your web page, which appears in the browser's title bar or tab. It's also essential for search engine optimization (SEO).
<br></br>
&lt;body&gt;: The &lt;body&gt; element contains the main content of your web page. This is where you place text, images, links, and other visible elements that users will see.
<br></br>
Basic HTML Elements<br />
HTML uses a variety of elements (also called tags) to structure content. Here are some common ones you'll use in creating the backbone of your college hackathon website:<br />
<br></br>
&lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;: These elements define headings with different levels of importance, from the main title (&lt;h1&gt;) to subsection headings (&lt;h2&gt;, &lt;h3&gt;, etc.).
<br></br>
&lt;p&gt;: The paragraph element is used to structure text content. It separates text into paragraphs.
<br></br>
&lt;ul&gt; and &lt;ol&gt;: These elements are for creating unordered and ordered lists, respectively. Use &lt;li&gt; (list item) inside them to define individual list items.
<br></br>
&lt;a&gt;: The anchor element is used for creating hyperlinks. It allows you to link to other web pages or resources.
<br></br>
&lt;img&gt;: Use the image element to display images on your web page. You'll need to specify the source (src) attribute to point to the image file.
<br></br>
&lt;div&gt;: The division element is a generic container for grouping content. It's often used for layout and styling purposes.
<br></br>
Creating the Backbone of Your Hackathon Website<br />
Now that you've learned about the basic HTML structure and elements, let's start creating the backbone of your college hackathon website. Begin with the following steps:<br />
<br></br>
Open a text editor (e.g., Notepad, Visual Studio Code, or Sublime Text).
<br></br>
Create an HTML file and save it with a ".html" extension (e.g., "index.html").
<br></br>
Begin with the HTML structure mentioned earlier and replace "Your Title Here" with the actual title of your hackathon website.
<br></br>
Inside the &lt;body&gt; element, start adding content such as headings, paragraphs, lists, and images to represent the structure of your webpage.
<br></br>
As you add content, save the file and open it in a web browser to see how your webpage is shaping up.
<br></br>
Congratulations! You've taken your first steps into the world of HTML, creating the foundational structure for your college hackathon website. In the next tutorials, we'll delve deeper into adding content, styling with CSS, and creating additional pages for your project.<br />


                <div><object data="./test.txt"></object></div>
            </Tab>
            <Tab eventKey="2" title="2">
                <h2>Structuring Content with Headings</h2>
                Structuring Content with Headings
                <br></br>
HTML provides six levels of headings, from &lt;h1&gt; (the most important) to &lt;h6&gt; (the least important). Headings are crucial for organizing content and providing structure to your webpage. Here's how to use them:<br />

<br></br>
&lt;h1&gt;Main Title&lt;/h1&gt;
<br></br>
&lt;h2&gt;Section Title&lt;/h2&gt;
<br></br>
&lt;h3&gt;Subsection Title&lt;/h3&gt;
<br></br>
Use &lt;h1&gt; for the main title of your hackathon website.
<br></br>
Use &lt;h2&gt; for section titles.
<br></br>
Further structure content with &lt;h3&gt; and other heading levels as needed.
<br></br>
Organizing Content with Paragraphs
<br></br>
To create paragraphs of text on your webpage, use the &lt;p&gt; element:
<br></br>
HTML<br></br>
&lt;p&gt;This is a paragraph of text. You can add multiple paragraphs to create content sections.&lt;/p&gt;
Use &lt;p&gt; to separate and organize text into paragraphs.
<br></br>
Add as many paragraphs as necessary to present your information clearly.
<br></br>
Creating Lists
<br></br>
HTML allows you to create both unordered and ordered lists to organize and display content in a structured manner.
<br></br>
Unordered List (Bulleted List):
<br></br>

&lt;ul&gt;<br />
  &lt;li&gt;Item 1&lt;/li&gt;
  <br></br>
  &lt;li&gt;Item 2&lt;/li&gt;
  <br></br>
  &lt;li&gt;Item 3&lt;/li&gt;
  <br></br>
&lt;/ul&gt;<br />
Use &lt;ul&gt; to create an unordered list.<br />
List items are defined with &lt;li&gt;.<br />
Ordered List (Numbered List):<br />


&lt;ol&gt;<br />
  &lt;li&gt;Step 1&lt;/li&gt;<br />
  &lt;li&gt;Step 2&lt;/li&gt;<br />
  &lt;li&gt;Step 3&lt;/li&gt;<br />
&lt;/ol&gt;<br />
Use &lt;ol&gt; to create an ordered list.<br />
Again, list items are defined with &lt;li&gt;.<br />
Adding Media and Links<br />
Media and links are essential for enhancing your webpage. Here's how to add images and links:<br />

Images:


&lt;img src="image.jpg" alt="Description of the image"&gt;
Use the &lt;img&gt; element to insert images.
The src attribute specifies the image source (file path or URL).
The alt attribute provides a text description for accessibility.
Links:


&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;
Use the &lt;a&gt; element to create hyperlinks.
The href attribute defines the link's destination (URL).
The text between the opening and closing &lt;a&gt; tags is the link's visible text.
By following these guidelines, you've begun structuring your college hackathon website with essential HTML elements, headings, paragraphs, lists, images, and links. In the upcoming tutorials, we'll explore further HTML features and continue building your project.

            </Tab>
            <Tab eventKey="3" title="3">
                <h2>Adding Media and Links</h2>
                In this tutorial, we will focus on two critical aspects of HTML that are essential for creating a website for a college hackathon: creating hyperlinks to connect various pages and external resources, and adding form elements for user input. These elements will enable users to navigate your site and interact with it effectively.<br />

Creating Hyperlinks<br />
Hyperlinks, also known as anchor tags, are fundamental for connecting different pages within your website and linking to external resources. Let's explore how to create hyperlinks in HTML.<br />

Linking to Other Pages in Your Website:<br />

To create a link within your website, use the &lt;a&gt; (anchor) tag with the href attribute to specify the destination page's file path or URL. For example:<br />


&lt;a href="about.html"&gt;About Us&lt;/a&gt;<br />
In this example, when users click "About Us," they'll be directed to the "about.html" page within your website.<br />

Linking to External Resources:<br />

You can also link to external websites or resources using the same &lt;a&gt; tag:<br />


&lt;a href="https://www.example.com" target="_blank"&gt;Visit Example&lt;/a&gt;<br />
The target="_blank" attribute ensures that the link opens in a new browser tab.<br />

Form Elements for User Input<br />
Forms are used to collect user input, such as registration details for your hackathon. Here's how to create basic form elements in HTML:<br />

Form Tag:<br />

Start by creating a form using the &lt;form&gt; tag:<br />


&lt;form action="submit.php" method="post"&gt;<br />
  &lt;!-- Form elements go here --&gt;<br />
&lt;/form&gt;<br />
The action attribute specifies the server-side script that will process the form data.<br />
The method attribute can be set to "post" or "get," depending on how you want to send the form data.<br />
Text Input:<br />

Use the &lt;input&gt; element with the type="text" attribute to create a text input field:<br />


&lt;label for="name"&gt;Name:&lt;/label&gt;<br />
&lt;input type="text" id="name" name="name"&gt;<br />
The for attribute of the &lt;label&gt; tag associates the label with the input field.<br />
The id and name attributes provide a unique identifier for the input field.<br />
Radio Buttons:<br />

To allow users to select one option from a list, use radio buttons:<br />


&lt;input type="radio" id="student" name="user-type" value="student"&gt;<br />
&lt;label for="student"&gt;Student&lt;/label&gt;<br />
&lt;input type="radio" id="faculty" name="user-type" value="faculty"&gt;<br />
&lt;label for="faculty"&gt;Faculty&lt;/label&gt;<br />
type="radio" indicates a radio button.<br />
The name attribute groups related radio buttons.<br />
The value attribute specifies the value sent to the server when the user selects an option.<br />
Submit Button:<br />

Include a submit button to send the form data:<br />


&lt;input type="submit" value="Register"&gt;<br />
type="submit" creates a button that submits the form.<br />
The value attribute defines the text displayed on the button.<br />
With these HTML elements for creating hyperlinks and user input forms, you're well on your way to building a functional college hackathon website. In the upcoming tutorials, we'll explore further HTML features and continue building your project.<br />
            </Tab>
            <Tab eventKey="4" title="4">
                <h2>Form Elements and User Input</h2>
                In this tutorial, we'll focus on implementing HTML forms for user registration on your college hackathon website. We'll cover the creation of input fields, labels, and buttons, and understand the essential role of forms in capturing user data.<br />

Understanding the Role of Forms<br />
HTML forms are essential for gathering information from users. Whether it's for user registration, feedback submission, or any other interaction, forms are the primary means to capture user data. Here's how to create a basic user registration form for your college hackathon website:<br />

Creating the Form<br />
To create a user registration form, you'll start with the &lt;form&gt; element. The form element serves as the container for all the input fields and buttons. Additionally, you'll specify the server-side script that will process the form data using the action attribute, and the HTTP method (usually "post" or "get") using the method attribute. For example:<br />


&lt;form action="process_registration.php" method="post"&gt;<br />
  &lt;!-- Form elements go here --&gt;<br />
&lt;/form&gt;<br />
In this example, the form will be submitted to "process_registration.php" using the "post" method.<br />

Input Fields <br></br>
Text Input:<br></br>

Text input fields are commonly used for capturing data like names and email addresses. Create a text input field using the &lt;input&gt; element with type="text":<br></br>

 <br></br>
 <br></br>
&lt;label for="full-name"&gt;Full Name:&lt;/label&gt;<br></br>
&lt;input type="text" id="full-name" name="full-name"&gt;<br></br>
The &lt;label&gt; element creates a label for the input field using the for attribute.<br></br>
The id and name attributes provide a unique identifier for the input field.<br></br>
Email Input:<br></br>

To capture email addresses, use the type="email" attribute:<br></br>

 <br></br>
 <br></br>
&lt;label for="email"&gt;Email:&lt;/label&gt;<br></br>
&lt;input type="email" id="email" name="email"&gt;<br></br>
The type="email" attribute tells the browser that the input should be validated as an email address.<br></br>
Checkboxes and Radio Buttons<br></br>
Use checkboxes and radio buttons for capturing user preferences, such as participation type (student, faculty) or agreement to terms.<br></br>

Checkboxes:<br></br>

 <br></br>
 <br></br>
&lt;input type="checkbox" id="student" name="user-type" value="student"&gt;<br></br>
&lt;label for="student"&gt;Student&lt;/label&gt;<br></br>
type="checkbox" creates a checkbox.<br></br>
name groups related checkboxes.<br></br>
value specifies the data sent to the server if the checkbox is checked.<br></br>
Radio Buttons:<br></br>

 <br></br>
 <br></br>
&lt;input type="radio" id="faculty" name="user-type" value="faculty"&gt;<br></br>
&lt;label for="faculty"&gt;Faculty&lt;/label&gt;<br></br>
type="radio" creates a radio button.<br></br>
name groups related radio buttons.<br></br>
value specifies the selected option.<br></br>
Submit Button<br></br>
Include a submit button to let users submit their registration details. Use the &lt;input&gt; element with type="submit":<br></br>

 <br></br>
 
&lt;input type="submit" value="Register"&gt;<br></br>
type="submit" creates a button that submits the form.<br></br>
The value attribute defines the text displayed on the button.<br></br>
            </Tab>
            <Tab eventKey="5" title="5">
                <h2>Styling with CSS</h2> <br></br>
                In this tutorial, we'll focus on enhancing the visual design and layout of your college hackathon website using CSS (Cascading Style Sheets). We'll explore CSS properties for fonts, colors, backgrounds, and creating a responsive design.

What is CSS?<br></br>
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a web page written in HTML. It enables you to control the layout, style, and appearance of your web content.<br></br>

Linking CSS to HTML<br></br>
Before applying any CSS styles, you need to link your HTML document to a CSS file. Here's how to do it:<br></br>

Create a CSS File: Create a new text file and save it with a ".css" extension (e.g., "styles.css"). This file will contain your CSS styles.<br></br>

Link the CSS File: In the &lt;head&gt; section of your HTML document, add the following line to link to your CSS file:


&lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;<br></br>
Applying CSS Styles<br></br>
Now, let's explore some CSS properties to enhance the visual design and layout of your college hackathon website.<br></br>

Fonts and Text<br></br>
Font Family: You can specify the font family for your text. For example, to use the "Arial" font family:<br></br>

css<br></br>
 <br></br>
body &#123;<br></br>
  font-family: Arial, sans-serif;<br></br>
  &#125;<br></br>
Font Size: Control the size of your text using the font-size property:<br></br>

css<br></br>
 <br></br>
h1 &#123;<br></br>
  font-size: 24px;<br></br>
  &#125;<br></br>
Colors<br></br>
Text Color: Change the color of text using the color property. You can use color names, hexadecimal codes, or RGB values:<br></br>

css<br></br>
 <br></br>
p &#123;<br></br>
  color: #333;<br></br>
  &#125;<br></br>
Background Color: Modify the background color of elements with the background-color property:<br></br>

css
 <br></br>
body &#123;<br></br>
  background-color: #f4f4f4;<br></br>
  &#125;<br></br>
Layout and Responsive Design<br></br>
Width and Max Width: Control the width of elements, and set a maximum width to make your content responsive:<br></br>

css<br></br>
 <br></br>
.container &#123;<br></br>
  width: 80%;<br></br>
  max-width: 1200px;<br></br>
  margin: 0 auto; /* Center the container */<br></br>
  &#125;<br></br>
Media Queries: Use media queries to apply specific styles for different screen sizes. For example, you can adjust font size and layout for smaller screens:<br></br>

css<br></br>
 <br></br>
@media screen and (max-width: 768px) &#123;<br></br>
  h1 &#123;<br></br>
    font-size: 20px;<br></br>
    &#125;<br></br>
    &#125;<br></br>

            </Tab>
            <Tab eventKey="6" title="6">
                <h2>Creating Multiple Pages and Navigation</h2>
                In this tutorial, we will focus on creating multiple pages for your college hackathon website, including the homepage, about page, schedule, registration, sponsors, and contact pages. We will also implement a navigation menu to provide easy access to different sections of the website.

Creating Multiple Pages<br></br>
Before we dive into the navigation menu, let's create the individual pages for your college hackathon website. Each page will have its HTML structure, content, and unique purpose. Here's an example of how to structure the homepage&#58;<br></br>


&lt;!DOCTYPE html&gt;<br></br>
&lt;html&gt;<br></br>
&lt;head&gt;<br></br>
  &lt;title&gt;College Hackathon - Home&lt;/title&gt;<br></br>
&lt;/head&gt;<br></br>
&lt;body&gt;<br></br>
  &lt;header&gt;<br></br>
    &lt;h1&gt;Welcome to the College Hackathon&lt;/h1&gt;<br></br>
  &lt;/header&gt;<br></br>
  &lt;nav&gt;<br></br>
    &lt;ul&gt;<br></br>
      &lt;li&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;<br></br>
      &lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;<br></br>
      &lt;li&gt;&lt;a href="schedule.html"&gt;Schedule&lt;/a&gt;&lt;/li&gt;<br></br>
      &lt;li&gt;&lt;a href="registration.html"&gt;Registration&lt;/a&gt;&lt;/li&gt;<br></br>
      &lt;li&gt;&lt;a href="sponsors.html"&gt;Sponsors&lt;/a&gt;&lt;/li&gt;<br></br>
      &lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;<br></br>
    &lt;/ul&gt;<br></br>
  &lt;/nav&gt;<br></br>
  &lt;main&gt;<br></br>
    &lt;!-- Homepage content goes here --&gt;<br></br>
  &lt;/main&gt;<br></br>
  &lt;footer&gt;<br></br>
    &lt;!-- Footer content goes here --&gt;<br></br>
  &lt;/footer&gt;<br></br>
&lt;/body&gt;<br></br>
&lt;/html&gt;<br></br>
Now, create the other pages (about.html, schedule.html, registration.html, sponsors.html, and contact.html) with similar structures, replacing the content in the &lt;main&gt; section accordingly.<br></br>

Implementing the Navigation Menu<br></br>
To create a navigation menu that allows users to easily access different sections of your website, we use an unordered list (&lt;ul&gt;) within the &lt;nav&gt; element. Each list item (&lt;li&gt;) contains a hyperlink (&lt;a&gt;) to one of the pages. Here's an example of the navigation menu from the homepage&#58;<br></br>


&lt;nav&gt;<br></br>
  &lt;ul&gt;<br></br>
    &lt;li&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;<br></br>
    &lt;li&gt;&lt;a href="about.html"&gt;About&lt;/a&gt;&lt;/li&gt;<br></br>
    &lt;li&gt;&lt;a href="schedule.html"&gt;Schedule&lt;/a&gt;&lt;/li&gt;<br></br>
    &lt;li&gt;&lt;a href="registration.html"&gt;Registration&lt;/a&gt;&lt;/li&gt;<br></br>
    &lt;li&gt;&lt;a href="sponsors.html"&gt;Sponsors&lt;/a&gt;&lt;/li&gt;<br></br>
    &lt;li&gt;&lt;a href="contact.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;<br></br>
  &lt;/ul&gt;<br></br>
&lt;/nav&gt;<br></br>
Each &lt;a&gt; tag in the list items links to a specific page.<br></br>
The href attribute contains the file path or URL of the target page.<br></br>
Repeat this menu code on every page to maintain consistent navigation across your website.<br></br>

Styling the Navigation Menu<br></br>
To make your navigation menu visually appealing, you can apply CSS to style the menu items, change colors, and adjust the layout. Here's an example of CSS for styling the navigation menu&#58;<br></br>

css
 <br></br>
nav &#123;<br></br>
  background-color&#58; #333;<br></br>
  color&#58; #fff;<br></br>
                    &#125;<br></br>
                    <br></br>

                    nav ul &#123;
                    <br></br>
                    list-style-type&#58; none;
                    <br></br>
                    padding&#58; 0;
                    <br></br>
&#125;
<br></br>
                    nav li &#123;
                    <br></br>
                    display&#58; inline;
                    <br></br>
  margin-right&#58; 20px;
  <br></br>
&#125;
<br></br>
                    nav a &#123;
                    <br></br>
  color&#58; #fff;
  <br></br>
  text-decoration&#58; none;
  <br></br>
                    &#125;
                    <br></br>
<br></br>
                    nav a&#58;hover &#123;
                    <br></br>
                    text-decoration&#58; underline;
                    <br></br>
                    &#125;
                    <br></br>
This CSS will style the navigation menu, making it easier to read and interact with.
<br></br>
By creating multiple pages and implementing a navigation menu, your college hackathon website will become well-organized, allowing users to effortlessly navigate between different sections. 
<Link href="/submit_implementation"> 
                        <Button variant="success">Final Project</Button>{' '}
                    </Link>
            </Tab>
        </Tabs>
        </div>
    );
}

export default Tutorial;
