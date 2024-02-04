# from RealtimeSTT import AudioToTextRecorder
from anyio import open_file
# library that was used for real-time TTS 
import json
from RealtimeSTT import AudioToTextRecorder
import openai
import os
# Storing the sentences that were said to figure out what is being mentioned in real-time
from pathlib import Path


path = Path(__file__).parent / "../../../controlpanel/public/data/techniques.json"
with path.open() as f:
    data = json.load(f)

wordList = []

jsonDataName = []
jsonDataPrompt = []
jsonDataScript = []
# Used for storing the data from the JSON file for the techniques

jsonCounter = 0

#def JSONUpdate(data):
for i in data:
    jsonDataName.append(i['name'])
    jsonDataPrompt.append(i['prompt'])
    jsonDataScript.append(i['script'])
    jsonCounter += 1

print(jsonDataName)


# runTime = True
# #variable to keep track of when the while loop is to be stopped

# if __name__ == '__main__':

#     recorder = AudioToTextRecorder(spinner=False, model="tiny.en", language="en")

#     print("Say something...")
#     # prompt for the user

#     while (True): 
#         # AIresponse(recorder.text())
#         wordList.append(recorder.text())
#         print(wordList)
#         # adding new sentences to the wordList to keep track of 

#         for i in range(jsonCounter):
#             print(jsonDataPrompt[i])
#             if(jsonDataPrompt[i] in recorder.text()):
#                 print("Prompt {} was excuted, at ".format(jsonDataName[i]) + str(len(wordList)) + "th sentence")
#                 exec(open(Path(__file__).parent / "./test.json" + jsonDataScript[i]).read(), globals())

