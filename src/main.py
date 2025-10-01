from flask import Flask, request, jsonify
from ldap3 import Server, Connection, ALL, NTLM
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

AD_SERVER = os.getenv('AD_SERVER')
AD_DOMAIN = os.getenv('AD_DOMAIN')
AD_PORT = int(os.getenv('AD_PORT'))
USE_SSL = os.getenv('USE_SSL', 'False').lower() == 'true'


@app.route('/auth', methods=['POST'])
def authenticate():
    data = request.get_json()
    if not data or 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Missing username or password'}), 400

    username = data['username']
    password = data['password']

    user_principal = f"{AD_DOMAIN}\\{username}"

    try:
        server = Server(
            host=AD_SERVER,
            port=AD_PORT,
            use_ssl=USE_SSL,
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
            return jsonify({'status': 'success', 'message': 'Authenticated'}), 200
        else:
            return jsonify({'status': 'error', 'message': 'Invalid credentials'}), 401

    except Exception as e:
        return jsonify({'status': 'error', 'message': 'Authentication failed', 'details': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)