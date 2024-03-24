from io import BytesIO

from cnocr import CnOcr
from PIL import Image
from ray import serve


@serve.deployment(num_replicas=4)
class OCREngine:
    def __init__(self):
        self.cnocr_models = {
            'densenet_lite_136-gru': CnOcr(rec_model_name='densenet_lite_136-gru'),
            'scene-densenet_lite_136-gru': CnOcr(rec_model_name='scene-densenet_lite_136-gru'),
            'doc-densenet_lite_136-gru': CnOcr(rec_model_name='doc-densenet_lite_136-gru'),
            'number-densenet_lite_136-fc': CnOcr(rec_model_name='number-densenet_lite_136-fc'), 
        }
    
    def get_texts(self, image_bytes, image_type):
        image = Image.open(BytesIO(image_bytes))
        text_lines = self.cnocr_models[image_type].ocr(image)
        texts = '\n'.join([line['text'] for line in text_lines])
        
        return texts
    