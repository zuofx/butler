from RealtimeSTT import AudioToTextRecorder
from anyio import open_file
# library that was used for real-time TTS 
import json

wordList = []
# Storing the sentences that were said to figure out what is being mentioned in real-time

# prompts
prompt1 = "Test 1."

f = open("C:\\Users\\Xi Chen\\Documents\\GitHub\\QHACKS24\\controlpanel\\public\\data\\techniques.json")

data = json.load(f)
jsonData = []

for i in data:
    jsonData.append(i)

# Initialize an empty dictionary to hold the name and prompt pairs
name_prompt_dict = {}

# Iterate through each item in the json_data list
for item in jsonData:
    # Use the 'name' value as the key and the 'prompt' value as the value for each dictionary entry
    name_prompt_dict[item['name']] = item['prompt']



runTime = True
# variable to keep track of when the while loop is to be stopped

if __name__ == '__main__':
    recorder = AudioToTextRecorder(spinner=False, model="tiny.en", language="en")

    print("Say something...")
    # prompt for the user

    while (runTime): 
        wordList.append(recorder.text())
        # adding new sentences to the wordList to keep track of 

        if(prompt1 in wordList[-1]):
            print("Prompt 1 was said")

            exec(open("C:\\Users\\Xi Chen\\Documents\\GitHub\\QHACKS24\\backend\\scripts\\script1.py").read(), globals())

    print("You said: ", wordList)   








"""
print(recorder.text(), end=" ", flush=True)
# printing out the words as the sentence is being said in close to real-time, keep until testing is finished

if(wordList[-1].__contains__("Stop.")):
    # Test the if statement, to see if the 
    # If you add the code to a list, and check the last element in the list after you appended it, then the if statements can be used to flag certain phrases
    # Although since the function recorder.text() is giving you a string of the sentence, you can use the string functions to check for certain phrases
    # So instead of just the last element in the wordList, we can just use the recorder.text() for some better efficiency
    
    Future Testing:
    
    print("Understood. Stopping the program.")
    runTime = False
"""