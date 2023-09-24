import requests
import config
import _json as JSON
ENDPOINT = "https://api.openai.com/v1/chat/completions"

def gpt4_project_analysis(description):
    headers = {
        "Authorization": f"Bearer {config.OPENAI_API_KEY}",
    }

    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"Is this project feasible with just HTML and CSS? {description}"}
    ]

    data = {
        "model": "gpt-4",
        "messages": messages
    }

    print("BEFORE")
    response = requests.post(ENDPOINT, headers=headers, json=data)
    print("AFTER")
    print(response.json())
    if 'choices' in response.json():
        answer = response.json()['choices'][0]['message']['content'].strip().lower()
        
        if 'yes' in answer or 'feasible' in answer:
            return True, None
        else:
            suggestion = gpt4_project_suggestion(description)
            return False, suggestion
    else:
        return False, "Error analyzing project feasibility"

def gpt4_project_suggestion(description):
    headers = {
        "Authorization": f"Bearer {config.OPENAI_API_KEY}",
    }

    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"Suggest in one sentence a project similar to '{description}' that can be done with HTML and CSS."}
    ]

    data = {
        "model": "gpt-4",
        "messages": messages
    }

    response = requests.post(ENDPOINT, headers=headers, json=data)
    if 'choices' in response.json():
        suggestion = response.json()['choices'][0]['message']['content'].strip()
        return suggestion
    else:
        return "Error generating project suggestion"

def generate_course_outline(project_description):
    headers = {
        "Authorization": f"Bearer {config.OPENAI_API_KEY}",
    }

    messages = [
        {"role": "system", "content": "You are a tutor."},
        {"role": "user", "content": f"Generate a 6 list course outline to teach HTML in a way that is similar to the user's desired final project. The outlines should just be one-liners, and should be created in a way that emphasizes the parts needed to build this user's desired project: '{project_description}'"}
    ]

    data = {
        "model": "gpt-4",
        "messages": messages
    }

    response = requests.post(ENDPOINT, headers=headers, json=data)
    if 'choices' in response.json():
        outline = response.json()['choices'][0]['message']['content'].strip().split('\n')
        return outline
    else:
        return ["Error generating course outline"]

# Add the generate_tutorial_content function here. The exact content of this function depends on how you plan to implement it, which we haven't detailed yet.
def generate_tutorial_content(topic, project_description):
    headers = {
        "Authorization": f"Bearer {config.OPENAI_API_KEY}",
    }

    messages = [
        {"role": "system", "content": "You are a web tutor."},
        {"role": "user", "content": f"Generate a tutorial on '{topic}' relevant to a project like '{project_description}'."}
    ]

    data = {
        "model": "gpt-4",
        "messages": messages
    }

    response = requests.post(ENDPOINT, headers=headers, json=data)
    if 'choices' in response.json():
        tutorial_content = response.json()['choices'][0]['message']['content'].strip()
        return tutorial_content
    else:
        return f"Error generating content for {topic}"


def check_code_implementation(user_code, todo_list):
    headers = {
        "Authorization": f"Bearer {config.OPENAI_API_KEY}",
    }

    messages = [
        {"role": "system", "content": "You are a web development teacher."},
        {"role": "user", "content": f"Here is my HTML code based on the instructions '{todo_list}': {user_code}. Is it correct?"}
    ]

    data = {
        "model": "gpt-4",
        "messages": messages
    }

    response = requests.post(ENDPOINT, headers=headers, json=data)
    if 'choices' in response.json():
        answer = response.json()['choices'][0]['message']['content'].strip().lower()
        
        if 'correct' in answer or 'right' in answer:
            return True
        else:
            return False
    else:
        return False
    

def generate_todo_list(project_description):
    headers = {
        "Authorization": f"Bearer {config.OPENAI_API_KEY}",
    }

    messages = [
        {"role": "system", "content": "You are a web tutor."},
        {"role": "user", "content": f"Generate a to-do list for the project: '{project_description}' that highlights the key HTML and CSS tasks needed."}
    ]

    data = {
        "model": "gpt-4",
        "messages": messages
    }

    response = requests.post(ENDPOINT, headers=headers, json=data)
    if 'choices' in response.json():
        todo_list_content = response.json()['choices'][0]['message']['content'].strip()
        return todo_list_content
    else:
        return f"Error generating to-do list for {project_description}"