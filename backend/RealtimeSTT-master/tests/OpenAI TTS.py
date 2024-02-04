from openai import OpenAI
from gtts import gTTS
from playsound import playsound
import os


# client = OpenAI(api_key="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")

# response = client.audio.speech.create(
#   model="tts-1",
#   voice="alloy",
#   input="Today is a wonderful day to build something people love!"
# )

def speak_text(text):
    # Generate speech from the text
    tts = gTTS(text=text, lang='en')
    
    # Save the audio file
    audio_file = "temp_audio.mp3"
    tts.save(audio_file)
    
    # Play the audio file
    playsound(audio_file)


# Example usage
speak_text("Hello, this is a test sentence to demonstrate text to speech.")

