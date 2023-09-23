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
            return False, "Suggest a similar project that can be done with HTML and CSS."
    else:
        print(f"Unexpected API response for description: {description}")
        return False, "Error analyzing project feasibility"
