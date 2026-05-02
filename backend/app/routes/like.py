from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from .. import crud, schemas

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def like(data: schemas.LikeSchema, db: Session = Depends(get_db)):
    return crud.create_like(db, data.image_url, data.breed)

@router.delete("/")
def unlike(image_url: str, db: Session = Depends(get_db)):
    crud.delete_like(db, image_url)
    return {"message": "deleted"}

@router.get("/")
def get_all(db: Session = Depends(get_db)):
    return crud.get_likes(db)