import React from 'react';
import UploadButton from './UploadButton';
import ProcessButton from './ProcessButton';
import SelectGroupedOptions from './ModelSelection'
import { TranscriptionCard, ErrorCard, CardContent, ButtonContainer } from '../styles';

export default function FileUploader() {
  const [file, setFile] = React.useState(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [transcription, setTranscription] = React.useState('');
  const [error, setError] = React.useState('');
  const [model, setModel] = React.useState('whisper-medium')

  return (
    <CardContent>
      <ButtonContainer>
        <SelectGroupedOptions
          setModel={setModel}
        />
        <UploadButton
          file={file}
          setFile={setFile}
          isUploading={isUploading}
          setIsUploading={setIsUploading}
          setTranscription={setTranscription}
          setError={setError}
        />
        <ProcessButton
          file={file}
          model={model}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
          setTranscription={setTranscription}
          setError={setError}
        />
      </ButtonContainer>
      {transcription && (
        <TranscriptionCard>
          <div>{transcription}</div>
        </TranscriptionCard>
      )}
      {error && (
        <ErrorCard>
          <div>{error}</div>
        </ErrorCard>
      )}
    </CardContent>
  );
}
