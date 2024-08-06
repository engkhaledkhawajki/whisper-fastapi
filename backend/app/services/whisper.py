import torch
import whisper
from schemas.model_dto import ModelMappings, ModelName, WhisperModelName
from .asr import ASRModel
from speechbrain.inference.ASR import WhisperASR

torch.cuda.is_available()
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"

class WhisperFactory(ASRModel):
    @staticmethod
    def get_model(model_type: str) -> ASRModel:
        if model_type in [WhisperModelName.WHISPER_SMALL, WhisperModelName.WHISPER_MEDIUM, WhisperModelName.WHISPER_BASE, WhisperModelName.WHISPER_LARGE]:
            return Whisper(size=model_type)
        if model_type == WhisperModelName.WHISPER_LARGE_V2:
            return WhisperLargeV2()

class Whisper(ASRModel):
    def __init__(self, size):
        self.size = ModelMappings[size]
        self.model = None

    def load_model(self, *args, **kwargs):
        self.model = whisper.load_model(self.size, device=DEVICE)
    
    def transcribe(self, *args, **kwargs) -> str:
        result = self.model.transcribe(kwargs['file_location'])
        transcription = result["text"]
        return transcription


class WhisperLargeV2(ASRModel):
    def __init__(self):
        super().__init__()

    def load_model(self, *args, **kwargs):
        self.model = WhisperASR.from_hparams(source="speechbrain/asr-whisper-large-v2-commonvoice-ar", savedir="pretrained_models/asr-whisper-large-v2-commonvoice-ar")
    
    def transcribe(self, *args, **kwargs) -> str:
        self.model.transcribe_file(kwargs['file_name'])


    