class ASRModel:
    def load_model(self, *args, **kwargs):
        raise NotImplementedError
    
    def transcribe(self, *args, **kwargs) -> str:
        raise NotImplementedError