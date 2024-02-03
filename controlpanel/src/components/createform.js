import React, { useState } from 'react';
import '../css/createform.css';

// import {writeJsonFile} from 'write-json-file';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    prompt: '',
    script: '',
    description: '',
    extras: [],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setFormSubmitted(true)
    e.preventDefault();

    const newTechnique = {
        name: formData.name,
        prompt: formData.prompt,
        script: formData.script,
        description: formData.description,
        extras: [...formData.extras],
      };

      try {
        const response = await fetch('http://localhost:3002/api/techniques/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTechnique),
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const responseData = await response.json();
        console.log('Data sent successfully:', responseData);
      } catch (error) {
        console.error('Error during fetch:', error);
      }

    

      
    
    console.log('Form data submitted:', newTechnique);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
        ...prevData,
        extras: [...prevData.extras, ''], 
    }));
};

  return (
    <form onSubmit={handleSubmit}>
        <h1>Create Technique</h1>
        <button onClick={(e) => {
            e.preventDefault();
            handleAddInput(e);
        }}>+</button>

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
