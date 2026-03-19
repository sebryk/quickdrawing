# Backend

NestJS backend for Quickdrawing. It handles Pinterest OAuth, stores user sessions in PostgreSQL, keeps encrypted Pinterest tokens, and exposes endpoints for reading boards and pins from the authenticated user's account.

This service is used to let artists sign in with Pinterest and turn their own boards into reference sets for drawing sessions.

## Stack

- `NestJS`
- `Prisma`
- `PostgreSQL`
- `Pinterest OAuth`

## Run PostgreSQL

```bash
docker compose up -d
```

## Prepare env

Create `backend/.env` manually and add the required variables:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/quickdrawing
POSTGRES_DB=quickdrawing
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
PORT=4000
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
SESSION_COOKIE_NAME=quickdrawing_session
SESSION_TTL_DAYS=14
COOKIE_DOMAIN=
COOKIE_SAME_SITE=lax
APP_ENCRYPTION_KEY=your_64_char_hex_key
PINTEREST_AUTH_URL=https://www.pinterest.com/oauth/
PINTEREST_TOKEN_URL=https://api.pinterest.com/v5/oauth/token
PINTEREST_USER_URL=https://api.pinterest.com/v5/user_account
PINTEREST_API_BASE_URL=https://api.pinterest.com/v5
PINTEREST_CLIENT_ID=your_client_id
PINTEREST_CLIENT_SECRET=your_client_secret
PINTEREST_REDIRECT_URI=http://localhost:4000/auth/pinterest/callback
PINTEREST_SCOPE=boards:read,pins:read,user_accounts:read
```

`APP_ENCRYPTION_KEY` must be a 64-character hex string for AES-256-GCM token encryption.

## Install and run

```bash
npm install
npm run prisma:generate
npm run start:dev
```

The API starts on `http://localhost:4000`.

## Main endpoints

- `GET /auth/pinterest/url` - returns a Pinterest authorization URL.
- `GET /auth/pinterest/callback` - handles the Pinterest OAuth callback.
- `GET /auth/pinterest/me` - returns the authenticated Pinterest user from the session cookie.
- `POST /auth/pinterest/logout` - revokes the current session.
- `GET /pinterest/boards` - returns boards from the authenticated user's Pinterest account.
- `GET /pinterest/boards/:boardId` - returns a specific board.
- `GET /pinterest/boards/:boardId/pins` - returns pins from a board.
- `GET /pinterest/pins` - returns the user's available pins.
- `GET /pinterest/pins/:pinId` - returns a specific pin.
