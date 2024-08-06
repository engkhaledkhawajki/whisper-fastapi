import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ButtonContainer, buttonStyles, purple, green } from '../styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
  height: 1,
  bottom: 0,
  left: 0,
});

export default function UploadButton({ file, setFile, isUploading, setIsUploading, setTranscription, setError }) {
  const [text, setText] = React.useState('Upload File');
  const [btnColor, setBtnColor] = React.useState(purple);
  const fileInputRef = React.useRef(null);

  const handleFileChange = (event) => {
    setTranscription('');
    setError('');
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadstart = () => {
        setIsUploading(true);
        setText('Uploading');
      };

      reader.onloadend = () => {
        setIsUploading(false);
        setBtnColor(green);
        setText('File Uploaded');
      };

      reader.onerror = () => {
        setIsUploading(false);
        setText('Upload File');
      };

      reader.readAsArrayBuffer(file);
      setFile(file);
    } else {
      setIsUploading(false);
      setBtnColor(purple);
      setText('Upload File');
      setFile(null);
    }
  };

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <ButtonContainer>
      <LoadingButton
        onClick={handleUploadButtonClick}
        loading={isUploading}
        loadingPosition="start"
        fullWidth={true}
        sx={buttonStyles(btnColor).root}
        startIcon={<CloudUploadIcon />}
        variant="outlined"
      >
        {text}
        <VisuallyHiddenInput
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </LoadingButton>
    </ButtonContainer>
  );
}
