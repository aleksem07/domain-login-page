from ldap3 import Server, Connection, ALL, NTLM
from .config import Config
import logging

logger = logging.getLogger(__name__)

def authenticate_user(username: str, password: str) -> bool:
    user_principal = f"{Config.AD_DOMAIN}\\{username}"

    logger.info(f"Attempting to authenticate user: {user_principal}")

    try:
        server = Server(
            host=Config.AD_SERVER,
            port=Config.AD_PORT,
            use_ssl=Config.USE_SSL,
            get_info=ALL
        )

        conn = Connection(
            server,
            user=user_principal,
            password=password,
            authentication=NTLM
        )

        if conn.bind():
            conn.unbind()
            logger.info("Authentication successful")
            return True
        else:
            logger.warning("Invalid credentials")
            return False

    except Exception as e:
        logger.error(f"LDAP connection error: {str(e)}")
        raise
