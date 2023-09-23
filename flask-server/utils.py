# utils.py
import requests
import config  # Import the configurations

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

    response = requests.post(ENDPOINT, headers=headers, json=data)
    response_data = response.json()

    # Extracting the answer from the response
    if 'choices' in response_data:
        answer = response_data['choices'][0]['message']['content'].strip().lower()
        
        if 'yes' in answer or 'feasible' in answer:
            return True, None
        else:
            suggestion = gpt4_project_suggestion(description)
            return False, suggestion
    else:
        print(f"Unexpected API response for description: {description}")
        return False, "Error analyzing project feasibility"


def gpt4_project_suggestion(description):
    headers = {
        "Authorization": f"Bearer {config.OPENAI_API_KEY}",
    }

    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"Suggest a project similar to '{description}' that can be done with HTML and CSS."}
    ]

    data = {
        "model": "gpt-4",
        "messages": messages
    }

    response = requests.post(ENDPOINT, headers=headers, json=data)
    response_data = response.json()

    # Extracting the suggestion from the response
    if 'choices' in response_data:
        suggestion = response_data['choices'][0]['message']['content'].strip()
        return suggestion
    else:
        print(f"Unexpected API response for description: {description}")
        return "Error generating project suggestion"
    

def generate_course_outline(project_description):
    headers = {
        "Authorization": f"Bearer {config.OPENAI_API_KEY}",
    }

    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"Generate a course outline for creating a project similar to '{project_description}' using HTML and CSS."}
    ]

    data = {
        "model": "gpt-4",
        "messages": messages
    }

    response = requests.post(ENDPOINT, headers=headers, json=data)
    response_data = response.json()

    # Extracting the course outline from the response
    if 'choices' in response_data:
        outline = response_data['choices'][0]['message']['content'].strip().split('\n')
        return outline
    else:
        print(f"Unexpected API response for description: {project_description}")
        return ["Error generating course outline"]

    
