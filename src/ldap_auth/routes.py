from flask import Blueprint, request, jsonify
from .auth import authenticate_user
import logging

logger = logging.getLogger(__name__)

bp = Blueprint('auth', __name__)

@bp.route('/auth', methods=['POST'])
def auth():
    data = request.get_json()
    
    if not data or 'username' not in data or 'password' not in data:
        logger.warning("Missing username or password in request")
        return jsonify({'error': 'Missing username or password'}), 400

    username = data['username']
    password = data['password']

    try:
        if authenticate_user(username, password):
            return jsonify({'status': 'success', 'message': 'Authenticated'}), 200
        else:
            return jsonify({'status': 'error', 'message': 'Invalid credentials'}), 401

    except Exception as e:
        logger.exception("Authentication failed with exception")
        return jsonify({
            'status': 'error', 
            'message': 'Authentication failed', 
            'details': str(e)
        }), 500