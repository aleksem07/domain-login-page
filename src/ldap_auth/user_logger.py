import logging
import os
from typing import Dict
from .config import Config

_user_loggers: Dict[str, logging.Logger] = {}

def get_user_logger(username: str) -> logging.Logger:
    """
    Args:
        username (str): Логин пользователя
        
    Returns:
        logging.Logger: Логгер для пользователя
    """
    global _user_loggers
    
    if username in _user_loggers:
        return _user_loggers[username]
    
    log_dir = 'logs'
    os.makedirs(log_dir, exist_ok=True)
    
    logger = logging.getLogger(f"user_{username}")
    logger.setLevel(logging.DEBUG if Config.DEBUG else logging.INFO)
    
    log_file = os.path.join(log_dir, f"{username}.log")
    file_handler = logging.FileHandler(log_file, encoding='utf-8')
    file_handler.setLevel(logging.DEBUG if Config.DEBUG else logging.INFO)
    
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(formatter)
    
    logger.addHandler(file_handler)
    
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.DEBUG if Config.DEBUG else logging.INFO)
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)
    
    _user_loggers[username] = logger
    
    return logger