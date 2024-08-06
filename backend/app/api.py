from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os

from backend.app.utils.model_factory import ModelFactory

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

@app.post("/transcribe/")
async def transcribe(model_type: str, file: UploadFile = File(...)):

    file_location = f"temp/{file.filename}"

    os.makedirs(os.path.dirname(file_location), exist_ok=True)
    with open(file_location, "wb") as f:
        f.write(await file.read())

    try:
        model_loader = ModelFactory.get_model(model_type=model_type)
        model_loader.load_model()
        transcription = model_loader.transcribe(file_location=file_location)
        os.remove(file_location)
        return JSONResponse(content={"transcription": transcription})

    except Exception as e:
        os.remove(file_location)
        return JSONResponse(content={"error": f"Model {model_type} failed to load with the following error: {e}"})
    
    
    
    