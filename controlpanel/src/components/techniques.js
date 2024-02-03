import { useState } from 'react';
import '../css/techniques.css';

const Techniques = ({name, desc, prompt, script, extra}) => {

    const [editState, setEditState] = useState(0)

    const [descEdited, setDescEdited] = useState(desc);
    const [promptEdited, setPromptEdited] = useState(prompt);
    const [extraEdited, setExtraEdited] = useState(extra ? extra.map(() => '') : []);


    function handleEdit() {
        if (editState == 0) setEditState(1);
        else setEditState(0);
    }


    function handleEditSave(editedDesc, editedPrompt, script, editedExtra){


        const data = {
            name: name,
            desc: editedDesc,
            prompt: editedPrompt,
            script: script, 
            extra: editedExtra,
          };

        console.log(data)

        fetch('http://localhost:3002/api/techniques/put', {
            method: 'PUT', 
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log('Data sent successfully:', data);
            setEditState(0);
        })
        .catch(error => {
            console.error('Error during fetch:', error);
        });
    }

    function handleDelete(name) {
        console.log("hello", name)
        fetch(`http://localhost:3002/api/techniques/delete/${name}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            window.location.reload()
        })   
        .catch(error => console.error('Error:', error));
    }


    

    if (editState == 0) {
        return(

            <div className = 'technique'>
    
                <div className = 'techniques-left'>
                    <div className="tl-name">{name}</div>
                    <div className="tl-desc"><span>Description:</span> {desc}</div>
                    <div className="tl-prompt"><span>Prompt:</span> "{prompt}"</div>
                    <div className="tl-prompt"><span>Script</span> "{script}"</div>
                </div>
    
                <div className = 'techniques-right'>
                    <a className="tr-edit" onClick={handleEdit}>EDIT</a>
                    <a className="tr-del" onClick={() => handleDelete(name)}>DELETE</a>

                </div>
    
            </div>
        )
    }else if (editState == 1) {
        return(
            <div className="technique-container">
                <div className = 'technique-edit'>
    
                    <div className = 'techniques-left'>
                        <div className="tl-name">{name}</div>
                        <div className="tl-desc"><span>Description:</span> {desc}</div>
                        <div className="tl-prompt"><span>Prompt:</span> "{prompt}"</div>
                        <div className="tl-prompt"><span>Script</span> "{script}"</div>
                    </div>

                    <div className = 'techniques-right'>
                        <a className="tr-edit" onClick={handleEdit}>EDIT</a>
                        <a className="tr-del" onClick={() => handleDelete(name)}>DELETE</a>

                    </div>

                    

                </div>
                <div className="edit-holder">

                    <div className="desc-edit-holder">
                        <div className="desc-title">Description:</div>
                        <input 
                            className="desc-input"
                            type="text"
                            value = {descEdited}
                            placeholder="Enter your description"
                            onChange = {(e) => setDescEdited(e.target.value)}
                        />
                    </div>

                    {/* <div className="name-edit-holder">
                        <div className="name-title">Name:</div>
                        <input 
                            className="name-input"
                            type="text"
                            value = {nameEdited}
                            placeholder="Enter your description"
                            onChange = {(e) => setNameEdited(e.target.value)}
                        />
                    </div> */}

                    <div className="name-edit-holder">
                        <div className="name-title">Prompt:</div>
                        <input 
                            className="name-input"
                            type="text"
                            value = {promptEdited}
                            placeholder="Enter your description"
                            onChange = {(e) => setPromptEdited(e.target.value)}
                        />
                    </div>

                    
                    {extra.length > 0 && (
                        <div className="name-edit-holder">
                            {extra.map((item, index) => (
                                <div key={index}>
                                    <div className="name-title">{item}</div>
                                    <input
                                        className="name-input"
                                        type="text"
                                        value={extraEdited[index]}
                                        placeholder={`Enter ${item}`}
                                        onChange={(e) => {
                                            const updatedExtra = [...extraEdited];
                                            updatedExtra[index] = e.target.value;
                                            setExtraEdited(updatedExtra);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    

                    <a onClick={() => handleEditSave(descEdited, promptEdited, script, extraEdited)} className="edit-save">SAVE</a>

                    
                </div>
            </div>

        )
    }
    
}

export default Techniques