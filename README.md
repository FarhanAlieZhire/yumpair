# Angular + Flask + MySQL Authentication App

This project contains:

- **Frontend**: Angular app with registration and login pages.
- **Backend**: Flask API with authentication endpoints.
- **Database**: MySQL (via SQLAlchemy + PyMySQL).

## Backend setup (`/backend`)

1. Create MySQL database:
   ```sql
   CREATE DATABASE yumpair_auth;
   ```
2. Create and activate a Python virtual environment.
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set environment variables (optional):
   ```bash
   export DATABASE_URL="mysql+pymysql://root:password@localhost:3306/yumpair_auth"
   export JWT_SECRET_KEY="your-secret"
   ```
5. Run API:
   ```bash
   python app.py
   ```

## Frontend setup (`/frontend`)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run Angular app:
   ```bash
   npm start
   ```

Frontend default URL: `http://localhost:4200`
Backend default URL: `http://localhost:5000`

## Authentication flow

- `POST /api/auth/register` creates a new user.
- `POST /api/auth/login` validates credentials and returns a JWT token.
- After login, Angular redirects to `/hello` and shows **Hello World**.
