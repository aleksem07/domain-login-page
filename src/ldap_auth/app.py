from flask import Flask
from .routes import bp
from .config import Config
import logging
import os

def create_app():
    app = Flask(__name__)
    app.secret_key = os.getenv('SECRET_KEY', 'dev-secret-key')  # для flash-сообщений
    setup_logging()
    app.register_blueprint(bp)
    return app

def setup_logging():
    log_level = logging.DEBUG if Config.DEBUG else logging.INFO
    os.makedirs('logs', exist_ok=True)
    logging.basicConfig(
        level=log_level,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler('logs/app.log'),
            logging.StreamHandler()
        ]
    )