import React from 'react';

const FileUpload = () => {
  const handleFileChange = async (event) => {
    try {
      const directoryHandle = await window.showDirectoryPicker()
      const fileHandle = await directoryHandle.getFileHandle('example.txt', { create: true })
      const writable = await fileHandle.createWritable()

      await writable.write(event.target.files[0])
      await writable.close()
    } catch (error) {
      console.error('Error saving file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload
