# LDAP Server

Flask-приложение для аутентификации через LDAP/AD.

## Установка

1. Создайте виртуальное окружение:
   ```python -m venv venv``` или ```python3 -m venv venv```
2. Активируйте его:
    ```Windows: venv\Scripts\activate```
    ```Linux/macOS: source venv/bin/activate```
3. Установите зависимости:
    ```pip install -r requirements.txt```
4. Настройте .env:
    ```cp env.example .env```
5. отредактируйте .env
6. Запустите backend:
    ```python run.py```
 
## Запуск Frontend

1. Перейдите в директорию frontend:
  ```cd src/frontend```
2. Установите зависимости:
  ```npm install```
3. Запустите frontend:
  ```npm run dev```

## Использование

1. Откройте браузер и перейдите по адресу http://localhost:3000
2. Введите учетные данные для входа
3. При успешной аутентификации вы будете перенаправлены на тестовую страницу