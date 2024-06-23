from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration
import torch

model_path = 'E:\Desktop1\FYP\HarmonyCare\Chatbot+Music\Chatbot-backend\BlenderBot'

tokenizer = BlenderbotTokenizer.from_pretrained(model_path)
model = BlenderbotForConditionalGeneration.from_pretrained(model_path)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

def generate_response(input_text):
    inputs = tokenizer(input_text, return_tensors="pt").to(device)
    reply_ids = model.generate(**inputs)
    return tokenizer.decode(reply_ids[0], skip_special_tokens=True)

print("Start chatting with the bot (type 'quit' to stop):")
while True:
    user_input = input("You: ")
    if user_input.lower() == "quit":
        print("Chatbot: Goodbye! Have a great day!")
        break
    response = generate_response(user_input)
    print(f"Chatbot: {response}")