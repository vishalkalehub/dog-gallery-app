from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal
from .. import crud

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def add(breed: str, db: Session = Depends(get_db)):
    crud.add_viewed(db, breed)
    return {"message": "added"}

@router.get("/")
def get(db: Session = Depends(get_db)):
    return crud.get_viewed(db)