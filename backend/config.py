
# Security -> Do not share
SECRET_KEY = "20dc07462558d814edddcda371d628fcd4355da3e4978b429681cc1420ffe88e"

# Database Credentials
DB_CONFIG = {
    'USER': 'postgres',
    'PASSWORD': '123',
    'HOST': 'localhost',
    'DATABASE': 'temp'
}

# Files path and route
UPLOAD_DIR = 'uploads'
FILES_ROUTE = UPLOAD_DIR



# def auto_crud(title, field_list):

#     # Creating Model Class
#     fields = ''
#     for field in field_list:
#         dtype = ''
#         if field['dtype'] == 'str' or field['dtype']=='img':
#             dtype = f"String({field['length']})"
#         elif field['dtype'] == 'int':
#             dtype = "Integer"
#         fields += f"    {field['name']} = Column({dtype}, nullable={field['nullable']}, unique={field['unique']}) \n"

#     model = f'''
#     class {title.title()}(Base):
#         __tablename__ = '{title.lower()}s'
#         id = Column(Integer, primary_key=True)
#         {fields}

#         def __repr__(self) -> str:
#             return f'<{title.title()} {field_list[0]['name']}={{self.{field_list[0]['name']}}}>'
#     '''

#     # Creating Serializer Class

#     fields = ''
#     for field in field_list:
#         if field['dtype'] == 'img':
#             fields += f"    {field['name']}:FilePath \n"
#             has_img=True
#         else:
#             fields += f"    {field['name']}:{field['dtype'][:3]} \n"

#     serializer = f'''
#     class {title.title()}(BaseModel):
#         id: int
#     {fields}
#         class Config:
#             orm_mode = True
#     '''

#     # Creating request functions

#     # GET
#     get = f'''
#     @app.get('/{title.lower()}', tags=['{title.title()}'], response_model=List[{title.title()}], status_code=status.HTTP_200_OK)
#     async def {title.lower()}_list():
#         return db.query(models.{title.title()}).all()

#     @app.get('/{title.lower()}/{{id}}', tags=['{title.title()}'], response_model={title.title()}, status_code=status.HTTP_200_OK)
#     async def get_{title.lower()}(id: int):
#         return db.query(models.{title.title()}).filter(models.{title.title()}.id == id).first()
#     '''

#     # POST

#     parameters = ''
#     for field in field_list:
#         if field['dtype'] != 'img' and field['dtype'] != 'file':
#             parameters += f"\n    {field['name']}: str = Form(...),"
#         else:
#             parameters += f"\n    {field['name']}: UploadFile = File(...),"

    
#     fields = ''
#     for field in field_list:
#         if field['dtype'] != 'img' and field['dtype'] != 'file':
#             fields += f"\n    {field['name']}={field['name']},"
#         else:
#             fields += f"\n    {field['name']}=fileUpload({field['name']}),"

#     post = f'''
#     @app.post('/{title.lower()}', tags=['{title.title()}'], response_model={title.title()}, status_code=status.HTTP_201_CREATED)
#     async def add_{title.lower()}({parameters}):
#         db_{title.lower()} = models.{title.title()}({fields}
#         )

#         db.add(db_{title.lower()})
#         db.commit()

#         return db_{title.lower()}
#     '''

#     fields = ''
#     for field in field_list:
#         fields += f"    db_{title.lower()}.{field['name']} = {title.lower()}.{field['name']}\n"

#     put = f'''
#     @app.put('/{title.lower()}', tags=['{title.title()}'], response_model={title.title()}, status_code=status.HTTP_200_OK)
#     async def update_{title.lower()}({title.lower()}: {title.title()}):
#         db_{title.lower()} = db.query(models.{title.title()}).filter(
#             models.{title.title()}.id == {title.lower()}.id).first()
#         if db_{title.lower()}==None:
#             raise HTTPException(
#                 status_code=status.status.HTTP_422_UNPROCESSABLE_ENTITY, detail='{title.title()} does not exist.')
#     {fields}
#         db.commit()
#         return db_{title.lower()}
#     '''

#     delete = f'''
#     @app.delete('/{title.lower()}/{{id}}', tags=['{title.title()}'])
#     async def delete_{title.lower()}(id: int):
#         db_{title.lower()} = get_{title.lower()}(id)
#         if db_{title.lower()}==None:
#             raise HTTPException(
#                 status_code=status.status.HTTP_422_UNPROCESSABLE_ENTITY, detail='{title.title()} does not exist.')
#         db.delete(db_{title.lower()})
#         db.commit()
#         return status.HTTP_200_OK
#     '''

#     output = f'''
#     {model}
#     {serializer}
#     {get}
#     {post}
#     {put}
#     {delete}
#     '''

#     file = open('auto_output', 'w')
#     file.write(output)
#     file.close()


# auto_crud(
#     title='Information',
#     field_list=[
#         {
#             'name': 'name',
#             'dtype': 'str',
#             'length': 255,
#             'nullable': False,
#             'unique': True
#         }
#     ]
# )