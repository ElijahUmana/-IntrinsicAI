import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Configurations
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
REDIS_URL = os.getenv("REDIS_URL")
APP_NAME = os.getenv("APP_NAME")
