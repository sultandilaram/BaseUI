from config import DB_CONFIG
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


engine = create_engine(f"postgresql://{DB_CONFIG['USER']}:{DB_CONFIG['PASSWORD']}@{DB_CONFIG['HOST']}/{DB_CONFIG['DATABASE']}",
                       echo=True)
Base = declarative_base()
SessionLocal = sessionmaker(bind=engine)

def migrate():
    from common.auth import User
    Base.metadata.create_all(engine)