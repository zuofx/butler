import React, { useState } from 'react';

import '../css/createform.css';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    prompt: '',
    script: '',
    description: '',
    extras: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData.extras)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTechnique = {
        name: formData.name,
        prompt: formData.prompt,
        script: formData.script,
        description: formData.description,
        extras: [...formData.extras],
      };

      //NEXT: figure out how to write json to techniques.json

    
    console.log('Form data submitted:', newTechnique);
  };

  const handleAddInput = () => {
    setFormData((prevData) => ({
      ...prevData,
      extras: [...prevData.extras, ''], 
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Create Technique</h1>
        <button onClick = {handleAddInput}>+</button>
        <div className = 'form-item'>
            <label>Name</label>
            <input
                type = "text"
                name = "name"
                value = {formData.name}
                onChange = {handleChange}
            />
        </div>

        <div className = 'form-item'>
            <label>Prompt</label>
            <input
                type = "text"
                name = "prompt"
                value = {formData.prompt}
                onChange = {handleChange}
            />
        </div>

        <div className = 'form-item'>
            <label>Script</label>
            <input
                type = "text"
                name = "script"
                value = {formData.script}
                onChange = {handleChange}
            />
        </div>

        <div className = 'form-item'>
            <label>Description</label>
            <input
                type = "text"
                name = "description"
                value = {formData.description}
                onChange = {handleChange}
            />
        </div>

      {formData.extras.map((extra, index) => (
        <div key={index} className='form-item'>
          <label>Extra</label>
          <input
            type="text"
            name={`extra-${index}`}
            value={extra}
            onChange={(e) => {
              const newExtras = [...formData.extras];
              newExtras[index] = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                extras: newExtras,
              }));
            }}
          />
        </div>
        ))}

        <button type="submit">Submit</button>

    </form>
  );
};

export default CreateForm;
