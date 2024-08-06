from backend.app.services.asr import ASRModel
from backend.app.services.asrecognition import ASRecognition
from backend.app.services.klaam import Klaam
from schemas.model_dto import WhisperModelName
from services.whisper import WhisperFactory

class ModelFactory(ASRModel):
    @staticmethod
    def get_model(model_type: str) -> ASRModel:
        if model_type in WhisperModelName.__members__:
            return WhisperFactory.get_model(size=model_type)
        if model_type == 'Klaam':
            return Klaam()
        if model_type == 'ASR Recognition':
            return ASRecognition()