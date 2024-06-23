import torch
from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration
from flask import Flask, request, jsonify
from flask_cors import CORS
from googleapiclient.discovery import build
import os

YOUTUBE_API_KEY = '' 
youtube = build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)

model_name = 'E:\Desktop1\FYP\HarmonyCare\Chatbot+Music\Chatbot-backend\BlenderBot3'
tokenizer = BlenderbotTokenizer.from_pretrained(model_name)
model = BlenderbotForConditionalGeneration.from_pretrained(model_name)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

app = Flask(__name__)
CORS(app)    
app.config['SESSION_COOKIE_NAME'] = 'random_session_cookie_chatbot'  

@app.route('/generate-response', methods=['POST'])
def generate_response_endpoint():
    data = request.json
    user_input = data['user_input']
    inputs = tokenizer(user_input, return_tensors="pt").to(device)
    reply_ids = model.generate(**inputs)
    response = tokenizer.decode(reply_ids[0], skip_special_tokens=True)
    return jsonify({'response': response})

@app.route('/create-playlist', methods=['POST'])
def create_playlist():
    data = request.json
    genre = data['genre']
    mood = data['mood']
    artist = data.get('artist', '')

    query = f"{genre} {mood} music {artist}"
    response = youtube.search().list(
        q=query,
        part='snippet',
        type='video',
        maxResults=10
    ).execute()
    video_ids = [item['id']['videoId'] for item in response['items']]
    return jsonify({'video_ids': video_ids})

if __name__ == '__main__':
    app.run(port=8080)
