import React, { useState } from 'react';
import axios from 'axios';

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('http://your-backend-server/upload', formData)
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUploadComponent;
