import React from 'react';
import { useState } from 'react';

const FileUpload = () => {

    const [file, setFile ] = useState()

    const handleFileChange = async (event) => {
        setFile(event.target.files[0])
    };

    const formData = new FormData()
    formData.append('file', file)

    const handleFileUpload = (e) => {
        e.preventDefault()

        fetch('http://localhost:3002/api/scripts/post', {
            method: 'POST', 
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log('File Uploaded:', data);
        })
        .catch(error => {
            console.error('Error during fetch:', error);
        });
    }

    return (
        <div>
            <form onSubmit = {handleFileUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            
        </div>
    );
};

export default FileUpload
