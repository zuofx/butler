import React, { useState } from 'react';

import '../css/colourpicker.css';

const ColorPicker = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(50);
  const [brightness, setBrightness] = useState(50);

  const updateColor = () => {
    const color = `hsl(${hue}, ${saturation}%, ${brightness}%)`;
    return color;
  };

  const handleButtonClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div>
    <button onClick={handleButtonClick}>Open Color Picker</button>
    <div className="color-picker">
      

      {showColorPicker && (
        <div className = "all-sliders">
          <div className="slider-container">
            <label htmlFor="hue">Hue:</label>
            <input
              type="range"
              id="hue"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(e.target.value)}
            />
          </div>

          <div className="slider-container">
            <label htmlFor="saturation">Saturation:</label>
            <input
              type="range"
              id="saturation"
              min="0"
              max="100"
              value={saturation}
              onChange={(e) => setSaturation(e.target.value)}
            />
          </div>

          <div className="slider-container">
            <label htmlFor="brightness">Brightness:</label>
            <input
              type="range"
              id="brightness"
              min="0"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
            />
          </div>

          <div
            id="color-box"
            style={{
              backgroundColor: updateColor(),
              width: '50px',
              height: '50px',
              border: '2px solid black',
            }}
          ></div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ColorPicker;
