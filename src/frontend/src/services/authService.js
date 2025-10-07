import axios from 'axios';

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: '/auth', // This will be proxied to the backend
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const AUTH_DATA_KEY = 'authData';

class AuthService {
  async login(username, password) {
    try {
      const response = await apiClient.post('', {
        username,
        password,
      });

      if (response.data.status === 'success') {
        const authData = {
          username,
          timestamp: new Date().getTime(),
        };
        localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(authData));
      }

      return response.data;
    } catch (error) {
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        return error.response.data;
      } else if (error.request) {
        // Request was made but no response received
        throw new Error('Нет ответа от сервера. Проверьте подключение.');
      } else {
        // Something else happened
        throw new Error('Ошибка при отправке запроса: ' + error.message);
      }
    }
  }

  // Check if user is authenticated
  isAuthenticated() {
    const authData = localStorage.getItem(AUTH_DATA_KEY);
    return !!authData;
  }

  // Get user data from localStorage
  getUserData() {
    const authData = localStorage.getItem(AUTH_DATA_KEY);
    return authData ? JSON.parse(authData) : null;
  }

  // Logout and clear stored data
  logout() {
    localStorage.removeItem(AUTH_DATA_KEY);
  }
}

export default new AuthService();
