from flask import Flask
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from utils import gpt4_project_analysis

load_dotenv()
app = Flask(__name__)

app.config.from_object('config')


@app.route('/')
def hello_world():
    return "Hello, World!"


@app.route('/submit_project', methods=['POST'])
def submit_project():
    project_description = request.json.get('description')
    
    feasible, suggestion = analyze_project_with_gpt(project_description)
    
    if feasible:
        return jsonify({"status": "success", "message": "Project is feasible with HTML/CSS!", "description": project_description})
    else:
        return jsonify({"status": "alternate", "message": "Here's a similar project feasible with HTML/CSS:", "suggestion": suggestion})

def analyze_project_with_gpt(description):
    feasible, suggestion = gpt4_project_analysis(description)
    
    if feasible:
        return True, description
    else:
        # If not feasible, we will have to fetch a suggestion from GPT-4.
        # This is a placeholder until we implement that step.
        return False, suggestion



if __name__ == '__main__':
    app.run(debug=True)