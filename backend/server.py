from fastapi import FastAPI, Form, UploadFile
from ray import serve

from ocr_utils import OCREngine


app = FastAPI()


@serve.deployment(num_replicas=4)
@serve.ingress(app)
class CNOCRServer:
    def __init__(self, ocr_engine):
        self._ocr_engine = ocr_engine
  
    @app.post("/api/ocr")
    async def do_ocr(self, image: UploadFile = Form(), image_type: str = Form()):
        image_bytes = await image.read()
        ocr_result = await self._ocr_engine.get_texts.remote(image_bytes, image_type)
        
        return {'ocr_result': ocr_result}
    

ocr_app = CNOCRServer.bind(OCREngine.bind())
