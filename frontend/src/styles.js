import styled from 'styled-components';
import { Box, alpha } from '@mui/material';
import Select from '@mui/joy/Select';

export const purple = '#390197'
export const green = '#007E6A'
export const blue = '#004DCF'
export const cardColor = '#FFFFFF'

// Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background-color: #fafaff;
  min-height: 100vh;
  width: 100%;
`;

// Title
export const Title = styled.h2`
  color: ${purple};
  margin-bottom: 20px;
  font-size: 2em;
  text-align: center;
`;

export const Card = styled.div`
  border-bottom: 3px solid rgba(57, 1, 151, 0.25);
  border-top: 1px solid rgba(57, 1, 151, 0.25);
  border-right: 1px solid rgba(57, 1, 151, 0.25);
  border-left: 1px solid rgba(57, 1, 151, 0.25);
  background-color: ${cardColor};
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 2rem;
  height: auto;
  max-width: 50%;
  text-align: center;
  width: 50%;
  margin-top: 2rem;

  @media (min-width: 300px) {
    padding: 2.5rem;
    height: 60%;
    max-width: 80%;
    width: 90%;
    margin-top: 3rem;
  }

  @media (min-width: 600px) {
    padding: 2.5rem;
    height: 60%;
    max-width: 50%;
    width: 50%;
    margin-top: 3rem;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
    height: 50%;
    max-width: 50%;
    width: 50%;
    margin-top: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 3.5rem;
    height: 40%;
    max-width: 35%;
    width: 35%;
    margin-top: 3rem;
  }
`;

// Card Content
export const CardContent = styled.div`
  padding: 20px;
`;

// Button Container
export const ButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 75%;
  max-width: 600px;
  margin: 0 auto;
`;

// Transcription Card
export const TranscriptionCard = styled.div`
  background-color: rgba(0, 126, 106, 0.025);
  border: 1px solid rgba(0, 126, 106, 0.9);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
  max-width: 600px;
  word-wrap: break-word;
  font-size: 1em;
  color: ${green};
`;

// Error Card
export const ErrorCard = styled.div`
  background-color: rgba(255, 235, 238, 0.4);
  border: 1px solid rgba(211, 47, 47, 0.4);
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
  max-width: 600px;
  word-wrap: break-word;
  font-size: 1rem;
  color: #d32f2f;
`;

// Transcription Text
export const TranscriptionText = styled.p`
  margin: 0;
`;

// Error Message
export const ErrorMessage = styled.p`
  margin: 0;
`;

export const ModelSelection = styled(Select)`
  width: inherit !important;
  align-self: center;
`;

export const buttonStyles = (btnColor) => ({
  root: {
    borderRadius: 24,
    fontFamily: 'Poppins',
    color: btnColor,
    borderColor: alpha(btnColor, 0.5),
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: alpha(btnColor, 0.05),
      borderColor: alpha(btnColor, 0.8),
    },
  },
});

export const selectionStyles = (selColor) => ({
  root: {
    borderRadius: 24,
    innerWidth: 240,
    fontFamily: 'Poppins',
    color: selColor,
    borderColor: alpha(selColor, 0.5),
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: alpha(selColor, 0.05),
      borderColor: alpha(selColor, 0.8),
    },
  },
});

