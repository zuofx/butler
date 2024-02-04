# from RealtimeSTT import AudioToTextRecorder
from anyio import open_file
# library that was used for real-time TTS 
import json
from RealtimeSTT import AudioToTextRecorder
import openai
import os
# Storing the sentences that were said to figure out what is being mentioned in real-time
from pathlib import Path

wordList = []

runTime = True
#variable to keep track of when the while loop is to be stopped

if __name__ == '__main__':

    recorder = AudioToTextRecorder(spinner=False, model="tiny.en", language="en")
    print("Say something...")
    while (runTime): 
        
        wordList.append(recorder.text())
        print(wordList.pop())
        
