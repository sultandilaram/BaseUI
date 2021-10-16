from database import SessionLocal
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from common import auth

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

@app.get('/')
async def home(token: str = Depends(auth.oauth2_scheme)):
   return { "token": token }