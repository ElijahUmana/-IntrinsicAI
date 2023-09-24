from flask import Flask, request, jsonify, session
from dotenv import load_dotenv
from utils import gpt4_project_analysis, generate_course_outline, generate_tutorial_content, check_code_implementation
from flask_cors import CORS, cross_origin

load_dotenv()
app = Flask(__name__)
CORS(app, support_credentials=True)

app.config.from_object('config')
app.config['SECRET_KEY'] = 'your_secret_key_here'  # Ensure this is a strong, secret key!

@app.route('/hello')
@cross_origin(supports_credentials=True)
def hello_world():
    return "Hello, World!"

# @app.route('/submit_project', methods=['POST'])
# def submit_project():
#     print("Hello world")
#     project_description = request.json.get('description')
#     print("Project description: ", project_description)
#     feasible, suggestion = gpt4_project_analysis(project_description)
#     print("Feasible: ", feasible)
#     print("Suggestion: ", suggestion)
#     if feasible:
#         course_outline = generate_course_outline(project_description)
#         session['course_outline'] = course_outline
#         session['project_description'] = project_description
#         return jsonify({"status": "success", "message": "Project is feasible with HTML/CSS!", "description": project_description, "course_outline": course_outline})
#     else:
#         course_outline = generate_course_outline(suggestion)
#         return jsonify({"status": "alternate", "message": "Here's a similar project feasible with HTML/CSS:", "suggestion": suggestion, "course_outline": course_outline})
@app.route('/submit_project', methods=['POST'])
def submit_project():
    project_description = request.json.get('description')
    feasible, suggestion = gpt4_project_analysis(project_description)

    if feasible:
        course_outline = generate_course_outline(project_description)
        session['course_outline'] = course_outline
        session['project_description'] = project_description
        return jsonify({"status": "success", "message": "Project is feasible with HTML/CSS!", "description": project_description, "course_outline": course_outline})
    else:
        course_outline = generate_course_outline(suggestion)
        return jsonify({"status": "alternate", "message": "Here's a similar project feasible with HTML/CSS:", "suggestion": suggestion, "course_outline": course_outline})
    
@app.route('/next_tutorial', methods=['GET'])
def next_tutorial():
    current_page = session.get('current_page', 0)
    course_outline = session.get('course_outline') # array of lesson topics
    
    if current_page < len(course_outline):
        next_topic = course_outline[current_page]
        tutorial_content = generate_tutorial_content(next_topic, session.get('project_description'))
        
        session['current_page'] = current_page + 1
        return jsonify({"topic": next_topic, "content": tutorial_content})
    else:
        return jsonify({"status": "end_of_tutorials"})
    

@app.route('/submit_implementation', methods=['POST'])
def submit_implementation():
    user_code = request.json.get('code')
    todo_list = session.get('todo_list')  # assuming we've stored the generated to-do list in the session

    if not todo_list:
        return jsonify({"status": "error", "message": "To-do list not found!"})

    is_correct = check_code_implementation(user_code, todo_list)
    
    if is_correct:
        return jsonify({"status": "passed", "message": "Congratulations! Your implementation is correct."})
    else:
        return jsonify({"status": "failed", "message": "Your implementation doesn't match the expected output. Please try again."})


if __name__ == '__main__':
    app.run(debug=True)
