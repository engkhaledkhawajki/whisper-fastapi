from backend.app.services.asr import ASRModel
import torch
import torchaudio
from datasets import load_dataset
from lang_trans.arabic import buckwalter
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor

class Klaam(ASRModel):
    def __init__(self):
        self.resamplers = {
            48000: torchaudio.transforms.Resample(48000, 16000),
            44100: torchaudio.transforms.Resample(44100, 16000),
            32000: torchaudio.transforms.Resample(32000, 16000),
        }
        self.processor = Wav2Vec2Processor.from_pretrained("elgeish/wav2vec2-large-xlsr-53-arabic")
        self.model = None


    def load_model(self, *args, **kwargs):
        model = Wav2Vec2ForCTC.from_pretrained("elgeish/wav2vec2-large-xlsr-53-arabic").eval()
        self.model = model

    def _prepare_audio(self, audio):
        speech, sampling_rate = torchaudio.load(audio)
        audio = self.resamplers[sampling_rate](speech).squeeze().numpy()
        return audio
    
    def transcribe(self, *args, **kwargs) -> str:
        audio = self._prepare_audio(kwargs['file_location'])
        inputs = self.processor(audio, sampling_rate=16000, return_tensors="pt", padding=True)
        with torch.no_grad():
            predicted = torch.argmax(self.model(inputs.input_values).logits, dim=-1)
        predicted[predicted == -100] = self.processor.tokenizer.pad_token_id  # see fine-tuning script
        predicted = self.processor.tokenizer.batch_decode(predicted)
        return predicted