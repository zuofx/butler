// Import required modules
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');

// Create an Express application
const app = express();

// Set up middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Define constants
const PORT = 3002;
const TECHNIQUES_FILE_PATH = './techniques.json';
const SCRIPTS_UPLOAD_PATH = '../backend/scripts/';

//define techniques
const techniques = JSON.parse(fs.readFileSync(TECHNIQUES_FILE_PATH, 'utf-8'));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

// Endpoint to get techniques data
app.get("/api/techniques/get", (req, res) => {
    res.json(techniques);
});

// Endpoint to post new technique data
app.post("/api/techniques/post", (req, res) => {
    const newTechnique = req.body;

    // Read existing content from the file
    fs.readFile(TECHNIQUES_FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Internal server error");
        }

        // Parse the existing data
        let existingTechniques = JSON.parse(data);

        // Add the new technique to the array
        existingTechniques.push(newTechnique);

        // Write the updated array back to the file
        fs.writeFile(TECHNIQUES_FILE_PATH, JSON.stringify(existingTechniques, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).send("Internal server error");
            }
            res.status(200).send("Works");
        });
    });
});

// Endpoint to update technique data
app.put("/api/techniques/put", (req, res) => {
    try {
        const updatedData = req.body; 

        // Load existing data from the file
        const existingData = JSON.parse(fs.readFileSync(TECHNIQUES_FILE_PATH, 'utf-8'));

        // Find the index of the technique to be updated
        const index = existingData.findIndex(technique => technique.name === updatedData.name);

        if (index !== -1) {
            // Update the technique
            existingData[index] = updatedData;

            // Save the updated data back to the file
            fs.writeFileSync(TECHNIQUES_FILE_PATH, JSON.stringify(existingData, null, 2), 'utf-8');

            res.json({ message: 'Technique updated successfully' });
        } else {
            res.status(404).json({ error: 'Technique not found' });
        }
    } catch (error) {
        console.error('Error during PUT request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, SCRIPTS_UPLOAD_PATH); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// Endpoint to post script files
app.post('/api/scripts/post', upload.single('file'), (req, res) => {
    try {
        // console.log('File uploaded:', req.file);
        res.json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to delete technique data based on name
app.delete("/api/techniques/delete/:name", (req, res) => {
    try {
        const techniqueName = req.params.name;
        console.log(techniqueName)
        

        // Load existing data from the file
        const existingData = JSON.parse(fs.readFileSync(TECHNIQUES_FILE_PATH, 'utf-8'));

        // Find the index of the technique to be deleted
        const index = existingData.findIndex(technique => technique.name === techniqueName);

        if (index !== -1) {
            // Remove the technique from the array
            existingData.splice(index, 1);

            // Save the updated data back to the file
            fs.writeFileSync(TECHNIQUES_FILE_PATH, JSON.stringify(existingData, null, 2), 'utf-8');

            res.json({ message: 'Technique deleted successfully' });
        } else {
            res.status(404).json({ error: 'Technique not found' });
        }
    } catch (error) {
        console.error('Error during DELETE request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
