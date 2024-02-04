import React, { useState } from 'react';
import '../css/createform.css';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    prompt: '',
    script: '',
    desc: '',
    extra: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTechnique = {
      name: formData.name,
      prompt: formData.prompt,
      script: formData.script,
      desc: formData.desc,
      extra: { ...formData.extra },
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
    window.location.reload();
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    const inputKey = prompt('Enter key for extra value:');
    setFormData((prevData) => ({
      ...prevData,
      extra: {
        ...prevData.extra,
        [inputKey]: '',
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Technique</h1>
      <button onClick={handleAddInput}>+</button>

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
                name = "desc"
                value = {formData.desc}
                onChange = {handleChange}
            />
        </div> 

      {Object.entries(formData.extra).map(([key, value], index) => (
        <div key={index} className="form-item">
          <label>{key}</label>
          <input
            type="text"
            name={`extra-${key}`}
            value={value}
            onChange={(e) => {
              const newExtra = { ...formData.extra };
              newExtra[key] = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                extra: newExtra,
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



