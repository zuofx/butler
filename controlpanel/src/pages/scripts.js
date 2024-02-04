import FileUpload from '../components/fileupload.js';
import { useState, useEffect } from 'react';

import '../css/scripts.css';

const Scripts = () => {
    const [scripts, setScripts] = useState([]);

    useEffect(() => {
        const handleScripts = async () => {
            try {
                const response = await fetch('http://localhost:3002/api/scripts/get');
                const data = await response.json();
                console.log(data);
                setScripts(data.files);
            } catch (error) {
                console.error('Error fetching scripts:', error);
            }
        };

        handleScripts();
    }, []);

    return (
        <div className='scripts-container'>
            <FileUpload />
            <h1>SCRIPTS:</h1>
            <div >
                {scripts.map((script, index) => (
                    <div key={index} className='script-item'>
                        {script}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Scripts;
