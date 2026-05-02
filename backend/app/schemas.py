from pydantic import BaseModel

class LikeSchema(BaseModel):
    image_url: str
    breed: str