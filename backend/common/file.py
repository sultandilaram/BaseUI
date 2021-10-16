
import os
import random
import shutil
import string
from fastapi.responses import FileResponse
from fastapi import APIRouter, File, UploadFile
from typing import Optional
from config import FILES_ROUTE, UPLOAD_DIR

def file_upload(file, upload_dir='', filename=None, overwrite=False):
    # Possible Exceptions
    if '.' in upload_dir:
        raise Exception('Upload path incorrect.')
    if filename == None:
        filename = file.filename
    else:
        raise Exception('Upload path incorrect.')
    try:
        os.stat(UPLOAD_DIR)
    except:
        os.mkdir(UPLOAD_DIR)
    upload_dir = os.path.join(UPLOAD_DIR, upload_dir)
    try:
        os.stat(upload_dir)
    except:
        os.mkdir(upload_dir)
    
    # Avoiding overwriting the file
    path = os.path.join(upload_dir, filename)
    if os.path.exists(path) and not overwrite:
        path = path.split('.')
        path[-2] += ''.join(random.choice(string.ascii_uppercase +
                            string.digits) for _ in range(6))
        ext = path.pop()
        path = ''.join(path) + '.' + ext

    with open(path, 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)
        buffer.close()

    return path

def file_router():
    router = APIRouter()
    @router.get(f'/{FILES_ROUTE}/{{directory}}/{{filename}}', tags=['FILES'])
    async def get_file(directory: str, filename: str):
        return FileResponse(os.path.join(UPLOAD_DIR, directory, filename))
    @router.post(f'/{FILES_ROUTE}', tags=['FILES'])
    async def post_file(directory: Optional[str]='', file: UploadFile = File(...)):
       return file_upload(file, directory)
    return router