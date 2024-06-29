import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #4a90e2;
  margin-bottom: 30px;
`;

export const UploadButton = styled.button`
  background-color: #4a90e2;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #357abd;
  }
`;

export const TranscriptionText = styled.p`
  margin-top: 20px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  word-wrap: break-word;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 20px;
`;
