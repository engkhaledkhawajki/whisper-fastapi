from asrecognition import ASREngine
from backend.app.services.asr import ASRModel

class ASRecognition(ASRModel):
    def __init__(self):
        self.model = None

    def load_model(self, *args, **kwargs):
        self.model = ASREngine("ar")

    def transcribe(self, *args, **kwargs) -> str:
        return self.model.transcribe(kwargs['file_location'])