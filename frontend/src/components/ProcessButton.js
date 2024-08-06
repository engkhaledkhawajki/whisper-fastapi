import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import { ButtonContainer, buttonStyles, blue } from '../styles';

export default function ProcessButton({ file, model, isProcessing, setIsProcessing, setTranscription, setError }) {
  const handleSendFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    setIsProcessing(true);
    try {
      const response = await axios.post(`api/transcribe/?${model}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.transcription){
        setTranscription(response.data.transcription);
      }
      else if (response.data.error){
        setError(response.data.error)
      }
    } catch (err) {
      setError('An error occurred while transcribing the audio.');
    }
    setIsProcessing(false);
  };

  return (
    <ButtonContainer>
      <LoadingButton
        onClick={handleSendFile}
        loading={isProcessing}
        loadingPosition="end"
        fullWidth={true}
        sx={buttonStyles(blue).root}
        endIcon={<SendIcon />}
        variant="outlined"
      >
        Transcribe
      </LoadingButton>
    </ButtonContainer>
  );
}
