import React, { useState } from 'react';
import axios from 'axios';
import { UploadButton, TranscriptionText, ErrorMessage } from '../styles';

const apiUrl = process.env.FASTAPI_URL || 'http://localhost:8000';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setTranscription('');
    setError('');
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${apiUrl}/transcribe/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setTranscription(response.data.transcription);
    } catch (err) {
      setError('An error occurred while transcribing the audio.');
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <UploadButton onClick={handleFileUpload}>Upload and Transcribe</UploadButton>
      {transcription && <TranscriptionText>{transcription}</TranscriptionText>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default FileUpload;
