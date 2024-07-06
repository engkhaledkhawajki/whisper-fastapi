from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import torch
import whisper
import os

app = FastAPI(
    title="Whisper ASR API",
    description="API for speech-to-text transcription using Whisper ASR model",
    version="1.0.0",
)

origins = ["*"]


app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
)


torch.cuda.is_available()
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

model = whisper.load_model("medium", device=DEVICE)

@app.post("/transcribe/")
async def transcribe(file: UploadFile = File(...)):
    # Save the uploaded file
    file_location = f"temp/{file.filename}"
    os.makedirs(os.path.dirname(file_location), exist_ok=True)
    with open(file_location, "wb") as f:
        f.write(await file.read())
    
    # Transcribe the audio file
    result = model.transcribe(file_location)
    transcription = result["text"]
    
    # Remove the temporary file
    os.remove(file_location)
    
    return JSONResponse(content={"transcription": transcription})