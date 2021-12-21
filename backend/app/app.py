from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from . import models, schemas
from .database import engine, SessionLocal
from common import auth

# Uncomment to migrate
# models.Base.metadata.create_all(engine)

# Static
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=['localhost'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
db = SessionLocal()

app.include_router(auth.router)


