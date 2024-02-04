# from RealtimeSTT import AudioToTextRecorder
from anyio import open_file
# library that was used for real-time TTS 
import json

wordList = []
# Storing the sentences that were said to figure out what is being mentioned in real-time

jsonDataName = []
jsonDataPrompt = []
jsonDataScript = []
# Used for storing the data from the JSON file for the techniques

jsonCounter = 0

f = open(path)
data = json.load(f)

print(data)

#def JSONUpdate(data):
for i in data:
    jsonDataName.append(i['name'])
    jsonDataPrompt.append(i['prompt'])
    jsonDataScript.append(i['script'])
    jsonCounter += 1

runTime = True
# variable to keep track of when the while loop is to be stopped

if __name__ == '__main__':

    script_dir = os.path.dirname(os.path.abspath(__file__))
    print(script_dir)

    # file_path = os.path.join(os.getcwd(), 'test.json')
    # f = open(file_path)
    # data = json.load(f)
    # print(data)

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


from RealtimeSTT import AudioToTextRecorder
from anyio import open_file
import openai


# use openai 0.28.0
def AIresponse (message):
    openai.api_key = "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"
    messages = [ {"role": "system", "content":  
                "You are a intelligent assistant."} ] 

    # Checks if the message has been set and if it create the appropriate response usinng ChatGPT
    if message: 
        messages.append( 
            {"role": "user", "content": message}, 
        ) 
        chat = openai.ChatCompletion.create( 
            model="gpt-3.5-turbo", messages=messages 
        ) 
    reply = chat.choices[0].message.content

    # prints out response 
    print(f"ChatGPT: {reply}") 
    messages.append({"role": "assistant", "content": reply}) 





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