from src.ldap_auth.app import create_app
from src.ldap_auth.config import Config

app = create_app()

if __name__ == '__main__':
    app.run(
        host=Config.HOST,
        port=Config.PORT,
        debug=Config.DEBUG
    )