from RealtimeSTT import AudioToTextRecorder
import sys

wordList = []

runTime = True

if __name__ == '__main__':
    recorder = AudioToTextRecorder(spinner=False, model="tiny.en", language="en")

    print("Say something...")
    while (runTime): 
        print(recorder.text(), end=" ", flush=True)
        wordList.append(recorder.text())
        if(wordList[-1].__contains__("Stop.")):
            print("Understood. Stopping the program.")
            runTime = False

    print("You said: ", wordList)   

