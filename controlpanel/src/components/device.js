import { useState } from 'react';
import '../css/device.css';

const Device = ({name, type, prompt, script, extra}) => {
    const [editState, setEditState] = useState(0)

    function handleEdit() {
        if (editState == 0) setEditState(1);
        else setEditState(0);
    }


    if (editState == 0) {
        return(

            <div className = 'technique'>
    
                <div className = 'techniques-left'>
                    <div className="tl-name">{name}</div>
                    <div className="tl-desc"><span>Description:</span> {type}</div>
                    <div className="tl-prompt"><span>Prompt:</span> "{prompt}"</div>
                </div>
    
                <div className = 'techniques-right'>
                    <a className="tr-edit" onClick={handleEdit}>EDIT</a>
                    <a className="tr-del">DELETE</a>
                </div>
    
            </div>
        )
    }else if (editState == 1) {
        return(
            <div className="technique-container">
                <div className = 'technique-edit'>
    
                    <div className = 'techniques-left'>
                        <div className="tl-name">{name}</div>
                        <div className="tl-desc"><span>Type:</span> {type}</div>
                        <div className="tl-prompt"><span>Prompt:</span> "{prompt}"</div>
                    </div>

                    <div className = 'techniques-right'>
                        <a className="tr-edit" onClick={handleEdit}>EDIT</a>
                        <a className="tr-del">DELETE</a>
                    </div>

                    

                </div>
                <div className="edit-holder">

                    <div className="desc-edit-holder">
                        {/* <div className="desc-title">Select Type:</div> */}
                        <fieldset>
                            <legend className="desc-title">Select Type:</legend>
                            <div>
                                <input 
                                    className="desc-input"
                                    name="type"
                                    id="philips"
                                    type="radio"
                                    value="Philips Hue"
                                    checked
                                />
                                <label for="philips">Philips Hue</label>
                            </div>
                            <div>
                                <input 
                                    className="desc-input"
                                    name="type"
                                    id="wolpc"
                                    type="radio"
                                    value="WoL Computer"
                                />
                                <label for="wolpc">WoL Computer</label>
                            </div>
                        </fieldset>
                        
                    </div>

                    <div className="name-edit-holder">
                        <div className="name-title">Name:</div>
                        <input 
                            className="name-input"
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="name-edit-holder">
                        <div className="name-title">Prompt:</div>
                        <input 
                            className="name-input"
                            type="text"
                            placeholder="i.e. Turn on the lights."
                        />
                    </div>

                    
                    {extra.length > 0 && (
                        <div className="name-edit-holder">
                            {extra.map((item, index) => (
                                <>
                                    <div className="name-title">{item}</div>
                                    <input 
                                        className="name-input"
                                        type="text"
                                        placeholder={`Enter ${item}`}
                                    />
                                </>
                            ))}
                        </div>
                    )}
                    

                    <a className="edit-save">SAVE</a>

                    
                </div>
            </div>

        )
    }
}

export default Device;