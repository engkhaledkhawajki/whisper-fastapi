import React from 'react';
import FileUploader from './components/FileUploader';
import { Container, Title, Card, CardTitle } from './styles';

const App = () => {
  return (
    <Container>
      <Title>Automatic Speech Recognition for Arabic</Title>
      <Card>
        <FileUploader />
      </Card>
    </Container>
  );
};

export default App;
