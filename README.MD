# LDAP Server

Flask-приложение для аутентификации через LDAP/AD.

## Установка

1. Создайте виртуальное окружение:
   ```python -m venv venv```
2. Активируйте его:
    ```Windows: venv\Scripts\activate```
    ```Linux/macOS: source venv/bin/activate```
3. Установите зависимости:
    ```pip install -r requirements.txt```
4. Настройте .env:
    ```cp env.example .env```
    # отредактируйте .env
5. Запустите:
    ```python src/main.py```