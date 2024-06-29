import React from 'react';
import FileUpload from './components/FileUpload';
import { Container, Title } from './styles';

const App = () => {
  return (
    <Container>
      <Title>Whisper ASR Transcription</Title>
      <FileUpload />
    </Container>
  );
};

export default App;
