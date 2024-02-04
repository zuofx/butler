from anyio import open_file
# library that was used for real-time TTS 
import json
from RealtimeSTT import AudioToTextRecorder
import openai
import os
# Storing the sentences that were said to figure out what is being mentioned in real-time
from pathlib import Path

import colorsys
from phue import Bridge


path = Path(__file__).parent / "../../../controlpanel/public/data/techniques.json"
with path.open() as f:
    data = json.load(f)

wordList = []

jsonDataName = []
jsonDataPrompt = []
jsonDataScript = []
# Used for storing the data from the JSON file for the techniques

for i in data:
    jsonDataName.append(i['name'])
    jsonDataPrompt.append(i['prompt'])
    jsonDataScript.append(i['script'])


runTime = True
#variable to keep track of when the while loop is to be stopped

if __name__ == '__main__':

    recorder = AudioToTextRecorder(spinner=False, model="tiny.en", language="en")

    print("Say something...")
    # prompt for the user

    while (runTime):

        wordList.append(recorder.text())
        spoken_text = wordList.pop()
        print(spoken_text)
        # print(recorder.text())
        # adding new sentences to the wordList to keep track of         

        for i in range(len(jsonDataPrompt)):  # Use len(jsonDataPrompt) instead of jsonCounter
            prompt_words = jsonDataPrompt[i].split()  # Assuming jsonDataPrompt[i] is a string with two words
            if all(word in spoken_text.split() for word in prompt_words):
                print(f"Prompt {jsonDataName[i]} was executed at the {len(wordList)}th sentence")
                script_path = Path(__file__).parent / jsonDataScript[i]
                exec(open(script_path).read(), globals())
