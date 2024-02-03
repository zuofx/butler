//installed express cors nodemon fs multer
const express = require('express')
const fs = require('fs')
const cors = require('cors')

const multer  = require('multer')


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
    // console.log(newTechnique);

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

//Edit Json Data 
app.put("/api/techniques/put", (req, res) => {
    try {
        const updatedData = req.body; 
        console.log(updatedData)

        // Load existing data from the file
        const existingData = JSON.parse(fs.readFileSync('techniques.json', 'utf-8'));

        // Find the index of the technique to be updated
        const index = existingData.findIndex(technique => technique.name === updatedData.name);

        if (index !== -1) {
            // Update the technique
            existingData[index] = updatedData;

            // Save the updated data back to the file
            fs.writeFileSync('techniques.json', JSON.stringify(existingData, null, 2), 'utf-8');

            res.json({ message: 'Technique updated successfully' });
        } else {
            res.status(404).json({ error: 'Technique not found' });
        }
    } catch (error) {
        console.error('Error during PUT request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../backend/scripts/'); // Specify the folder where you want to store the uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

app.post('/api/scripts/post', upload.single('file'), (req, res) => {
    try {
        // console.log('File uploaded:', req.file);
  
  
        res.json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  });