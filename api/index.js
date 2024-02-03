//installed express cors nodemon fs
const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
const techniques = require('./techniques.json')
const PORT = 3002
app.use(cors())
app.use(express.json())

//RUN server on port 
app.listen(PORT, ()=>{
    console.log(`Server is running on ＄{PORT}`)
})


//Data gets put in json


app.get("/api/techniques/get", (req, res) => {
    
    res.json(techniques);
})

//Data from json sent to client
app.post("/api/techniques/post", (req, res) => {
    const newTechnique = req.body;
    console.log(newTechnique);

    // Read existing content from the file
    fs.readFile("./techniques.json", 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Internal server error");
        }

        // Parse the existing data
        let existingTechniques = JSON.parse(data);

        // Add the new technique to the array
        existingTechniques.push(newTechnique);

        // Write the updated array back to the file
        fs.writeFile("./techniques.json", JSON.stringify(existingTechniques, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send("Internal server error");
            }
            res.status(200).send("Works");
        });
    });
});