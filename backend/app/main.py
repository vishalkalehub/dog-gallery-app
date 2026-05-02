from fastapi import FastAPI
from .database import Base, engine
from .routes import like, viewed
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(like.router, prefix="/like")
app.include_router(viewed.router, prefix="/viewed")
