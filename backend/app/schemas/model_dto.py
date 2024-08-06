from enum import Enum

class WhisperModelName(str, Enum):
    WHISPER_BASE = 'base'
    WHISPER_SMALL = 'small'
    WHISPER_MEDIUM = 'medium'
    WHISPER_LARGE = 'large'
    WHISPER_LARGE_V2 = 'large_v2'

class WhisperModelParam(str, Enum):
    WHISPER_BASE = 'Base'
    WHISPER_SMALL = 'Small'
    WHISPER_MEDIUM = 'Medium'
    WHISPER_LARGE = 'Large'
    WHISPER_LARGE_V2 = 'Large_v2'

WhisperModelMappings = {
    WhisperModelParam.WHISPER_BASE: WhisperModelName.WHISPER_BASE,
    WhisperModelParam.WHISPER_SMALL: WhisperModelName.WHISPER_SMALL,
    WhisperModelParam.WHISPER_MEDIUM: WhisperModelName.WHISPER_MEDIUM,
    WhisperModelParam.WHISPER_LARGE: WhisperModelName.WHISPER_LARGE,
    WhisperModelParam.WHISPER_LARGE_V2: WhisperModelName.WHISPER_LARGE_V2
}