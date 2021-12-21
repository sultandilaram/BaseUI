from __future__ import annotations
from typing import List
from sqlalchemy import Table, Column, String, Integer, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from fastapi import APIRouter, Depends, status, HTTPException, Form
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from app.database import Base, SessionLocal
from app.config import SECRET_KEY
from passlib.hash import bcrypt
from jose import jwe

router = APIRouter()
db = SessionLocal()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl='auth')


class RoleSerializer(BaseModel):
    id: int
    label: str

    class Config():
        orm_mode = True


class RoleInSerializer(BaseModel):
    label: str


class PermissionSerializer(BaseModel):
    id: int
    module: str
    create: bool
    read: bool
    update: bool
    delete: bool


class PermissionInSerializer(BaseModel):
    module: str
    create: bool = False
    read: bool = True
    update: bool = False
    delete: bool = False


class Role(Base):
    __tablename__ = "roles"
    id = Column(Integer, primary_key=True, index=True)
    label = Column(String, unique=True, nullable=False)
    permissions = relationship('Permission')

    def __init__(self, serializer: RoleSerializer):
        super().__init__(
            label=serializer.label,
        )

    def get(id: int = None, label: str = None) -> Role:
        if id == None and label == None:
            return db.query(Role).all()
        else:
            if id == None:
                query = db.query(Role).filter(Role.label == label)
            else:
                query = db.query(Role).filter(Role.id == id)
            if query.count() > 0:
                if query.count() == 1:
                    return query.first()
                return query.all()
        return False

    def dict(self):
        return {
            "id": self.id,
            "label": self.label,
        }

    def save(self):
        db.add(self)
        db.commit()


class Permission(Base):
    __tablename__ = "permissions"
    id = Column(Integer, primary_key=True, index=True)
    module = Column(String, unique=True, nullable=False)
    create = Column(Boolean, default=False, nullable=False)
    read = Column(Boolean, default=True, nullable=False)
    update = Column(Boolean, default=False, nullable=False)
    delete = Column(Boolean, default=False, nullable=False)
    role = Column(Integer, ForeignKey('roles.id'))

    def __init__(self, serializer: PermissionSerializer):
        super().__init__(
            module=serializer.module,
            create=serializer.create,
            read=serializer.read,
            update=serializer.update,
            delete=serializer.delete
        )

    def get(module: str = None) -> Permission:
        if module == None:
            return db.query(Permission).all()
        else:
            query = db.query(Permission).filter(Permission.module == module)
            if query.first():
                if query.count() == 1:
                    return query.first()
                return query
        return False

    def dict(self):
        return {
            "id": self.id,
            "module": self.module,
            "create": self.create,
            "read": self.read,
            "update": self.update,
            "delete": self.delete
        }

    def save(self):
        db.add(self)
        db.commit()


class LoginSerializer(BaseModel):
    username: str
    password: str

    @classmethod
    def as_form(
        cls,
        username: str = Form(...),
        password: str = Form(...)
    ) -> LoginSerializer:
        return cls(username=username, password=password)


class AuthSerializer(BaseModel):
    access_token: str
    token_type: str


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, unique=False, nullable=False)
    is_active = Column(Boolean, default=True)

    def __init__(self, serializer: LoginSerializer = None, username: str = None, password: str = None):
        if serializer != None:
            super().__init__(
                username=serializer.username,
                password=serializer.password
            )
        elif username != None and password != None:
            super().__init__(
                username=username,
                password=password
            )
        else:
            super().__init__()

    def get(username: str) -> User:
        query = db.query(User).filter(User.username == username)
        if query.first():
            if query.count() == 1:
                return query.first()
            return query
        return False

    def validate_password(self, password: str) -> bool:
        return bcrypt.verify(password, self.password)

    def dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "is_active": self.is_active
        }

    def save(self):
        self.password = bcrypt.hash(self.password)
        db.add(self)
        db.commit()

    def generate_token(self):
        return {"access_token": jwe.encrypt(self.username, SECRET_KEY, algorithm='dir', encryption='A256GCM'), "token_type": "bearer"}


def oauth_dependent(token: str = Depends(oauth2_scheme)) -> str:
    return jwe.decrypt(token, SECRET_KEY)


@router.post('/user', tags=['AUTHENTICATION'], response_model=AuthSerializer, status_code=status.HTTP_200_OK)
async def register_user(login: LoginSerializer = Depends(LoginSerializer.as_form)):
    if User.get(username=login.username):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT, detail="Username already exists.")
    user = User(login)
    user.save()
    return user.generate_token()


@router.post('/auth', tags=['AUTHENTICATION'], response_model=AuthSerializer, status_code=status.HTTP_200_OK)
async def login(login: OAuth2PasswordRequestForm = Depends()):
    user = User.get(username=login.username)
    if not user.validate_password(password=login.password):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Incorrect Credentials")
    return user.generate_token()


@router.get('/role', tags=['AUTHORIZATION'], response_model=List[RoleSerializer], status_code=status.HTTP_200_OK)
async def get_roles():
    return Role.get()


@router.get('/role/{label}', tags=['AUTHORIZATION'], status_code=status.HTTP_200_OK)
async def get_role(label: str):
    role = Role.get(label=label)
    if role:
        return role
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail="Role not found.")


@router.post('/role', tags=['AUTHORIZATION'], response_model=RoleSerializer, status_code=status.HTTP_200_OK)
async def create_role(serializer: RoleInSerializer):
    if Role.get(label=serializer.label):
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail="Role for this module already exists.")
    role = Role(serializer)
    role.save()
    return role.dict()


@router.get('/permission', tags=['AUTHORIZATION'], response_model=List[PermissionSerializer], status_code=status.HTTP_200_OK)
async def get_permissions():
    return Permission.get()


@router.get('/permission/{module}', tags=['AUTHORIZATION'], response_model=PermissionSerializer, status_code=status.HTTP_200_OK)
async def get_permission(module: str):
    permission = Permission.get(module)
    if permission:
        return permission.dict()
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail="Permission not found.")


@router.post('/permission', tags=['AUTHORIZATION'], response_model=PermissionSerializer, status_code=status.HTTP_200_OK)
async def create_permission(serializer: PermissionInSerializer):
    if Permission.get(serializer.module):
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail="Permission for this module already exists.")
    permission = Permission(serializer)
    permission.save()
    return permission.dict()
