from RealtimeSTT import AudioToTextRecorder
# library that was used for real-time TTS 

wordList = []
# Storing the sentences that were said to figure out what is being mentioned in real-time

runTime = True
# variable to keep track of when the while loop is to be stopped

if __name__ == '__main__':
    recorder = AudioToTextRecorder(spinner=False, model="tiny.en", language="en")

    print("Say something...")
    # prompt for the user
    while (runTime): 
        print(recorder.text(), end=" ", flush=True)
        # printing out the words as the sentence is being said in close to real-time, keep until testing is finished
        wordList.append(recorder.text())
        # adding new sentences to the wordList to keep track of 
        if(wordList[-1].__contains__("Stop.")):
            # Test the if statement, to see if the 
            # If you add the code to a list, and check the last element in the list after you appended it, then the if statements can be used to flag certain phrases
            # Although since the function rec
            """
            Future Testing:
            
            """
            print("Understood. Stopping the program.")
            runTime = False

    print("You said: ", wordList)   
