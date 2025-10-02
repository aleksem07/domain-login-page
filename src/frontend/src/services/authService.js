import axios from 'axios'

// Create an axios instance with default configuration
const apiClient = axios.create({
  baseURL: '/auth', // This will be proxied to the backend
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

class AuthService {
  async login(username, password) {
    try {
      const response = await apiClient.post('', {
        username,
        password
      })
      
      return response.data
    } catch (error) {
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        return error.response.data
      } else if (error.request) {
        // Request was made but no response received
        throw new Error('Нет ответа от сервера. Проверьте подключение.')
      } else {
        // Something else happened
        throw new Error('Ошибка при отправке запроса: ' + error.message)
      }
    }
  }
}

export default new AuthService()