from typing import Optional
from sqlalchemy import Column, String, Integer, Boolean
from fastapi import APIRouter, Depends, status, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from database import Base, SessionLocal
from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt

router = APIRouter()
db = SessionLocal()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='auth/token')
crypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
ALGORITHM = "HS256"


class UserSerializer(BaseModel):
    id: Optional[int]=0
    username: str
    password: str

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, unique=False, nullable=False)
    is_active = Column(Boolean, default=True)

def password_hash(password):
    return crypt_context.hash(password)

def user_validate(username, password):
    user = db.query(User).filter(User.username == username).first()
    if user:
        return crypt_context.verify(password, user.password)
    return False

def create_access_token(username, expires_delta: timedelta):
    to_encode = {
        "sub": username,
        "exp": datetime.utcnow() + expires_delta
    }
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

@router.post('/register', tags=['AUTH'])
async def register(user: UserSerializer):
   user = User(
       username=user.username,
       password=password_hash(user.password)
   )
   if db.query(User).filter(User.username == user.username).first():
       raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="username taken.")
   db.add(user)
   db.commit()
   return user

@router.post('/auth/token', tags=['AUTH'])
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    if user_validate(form_data.username, form_data.password):
        return { 
            "access_token": create_access_token(form_data.username, expires_delta=timedelta(minutes=30)),
            "token_type": "bearer"
            }
    raise HTTPException(status_code=400, detail="Incorrect Credentials")

