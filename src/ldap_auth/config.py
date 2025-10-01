import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    AD_SERVER = os.getenv('AD_SERVER')
    AD_DOMAIN = os.getenv('AD_DOMAIN')
    AD_PORT = int(os.getenv('AD_PORT'))
    USE_SSL = os.getenv('USE_SSL', 'False').lower() == 'true'
    DEBUG = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    HOST = os.getenv('FLASK_HOST', '0.0.0.0')
    PORT = int(os.getenv('FLASK_PORT', '5000'))

    if not AD_SERVER or not AD_DOMAIN:
        raise ValueError("AD_SERVER and AD_DOMAIN must be set in .env")