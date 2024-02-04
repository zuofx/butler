import React from 'react';
import { useState } from 'react';
import '../css/scripts.css'

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
            <form className="script-form" onSubmit = {handleFileUpload}>
                <input className="script-input" type="file" onChange={handleFileChange} />
                <button className="script-upload" type="submit">UPLOAD</button>
            </form>
            
        </div>
    );
};

export default FileUpload
