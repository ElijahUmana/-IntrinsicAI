from flask import Flask, request, jsonify, session
from dotenv import load_dotenv
from utils import (gpt4_project_analysis, generate_course_outline, 
                   generate_tutorial_content, check_code_implementation, generate_todo_list)
from flask_cors import CORS, cross_origin

load_dotenv()
app = Flask(__name__)
CORS(app, support_credentials=True)

app.config.from_object('config')
app.config['SECRET_KEY'] = 'your_secret_key_here'  # Ensure this is a strong, secret key!

@app.route('/hello')
def hello_world():
    return "Hello, World!"

@app.route('/submit_project', methods=['POST'])
def submit_project():
    project_description = request.json.get('description')
    feasible, suggestion = gpt4_project_analysis(project_description)

    if feasible:
        course_outline = generate_course_outline(project_description)
        session['course_outline'] = course_outline
        session['project_description'] = project_description
        first_tutorial_content = generate_tutorial_content(course_outline[0], project_description, [], course_outline)
        session['current_page'] = 1
        return jsonify({"status": "success", "message": "Project is feasible with HTML/CSS!", "description": project_description, "course_outline": course_outline, "content": first_tutorial_content})
    
    else:
        course_outline = generate_course_outline(suggestion)
        session['course_outline'] = course_outline
        session['project_description'] = suggestion   # Use the new suggestion as the project_description
        first_tutorial_content = generate_tutorial_content(course_outline[0], suggestion, [], course_outline)
        session['current_page'] = 1
        return jsonify({"status": "alternate", "message": "Here's a similar project feasible with HTML/CSS:", "suggestion": suggestion, "course_outline": course_outline, "content": first_tutorial_content})

@app.route('/get_outline', methods=['GET'])
def get_outline():
    outline = session.get('course_outline')
    return jsonify(course_outline=outline)

@app.route('/next_tutorial', methods=['GET'])
def next_tutorial():
    current_page = session.get('current_page', 1)
    course_outline = session.get('course_outline')
    previous_topics = course_outline[:current_page]   # Get all the topics before the current page
    
    if current_page < len(course_outline):
        next_topic = course_outline[current_page]
        tutorial_content = generate_tutorial_content(next_topic, session.get('project_description'), previous_topics, course_outline)
        
        session['current_page'] = current_page + 1
        return jsonify({"topic": next_topic, "content": tutorial_content})
    else:
        # When we reach the end of tutorials, we generate the to-do list.
        todo_list = generate_todo_list(session.get('project_description'))
        session['todo_list'] = todo_list
        return jsonify({"status": "end_of_tutorials", "todo_list": todo_list})

@app.route('/submit_implementation', methods=['POST'])
def submit_implementation():
    user_code = request.json.get('code')
    todo_list = generate_todo_list("webpage of cats") #session.get('todo_list')  # assuming we've stored the generated to-do list in the session

    if not todo_list:
        return jsonify({"status": "error", "message": "To-do list not found!"})

    is_correct = check_code_implementation(user_code, todo_list)
    
    if is_correct:
        return jsonify({"status": "passed", "message": "Congratulations! Your implementation is correct."})
    else:
        return jsonify({"status": "failed", "message": "Your implementation doesn't match the expected output. Please try again."})

if __name__ == '__main__':
    app.run(debug=True)
