# Quickdrawing Monorepo

Quickdrawing is a drawing practice app for artists. The project is split into a `frontend` app for running sketch sessions and a `backend` service for Pinterest authentication, session management, and access to boards and pins from the user's Pinterest account.

After signing in with Pinterest, users can open boards from their own account and use saved pins as custom references for drawing sessions.

## Project structure

- `frontend` - Next.js client application.
- `backend` - NestJS API with Prisma and PostgreSQL.

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`.

### Backend

```bash
cd backend
docker compose up -d
npm install
npm run prisma:generate
npm run start:dev
```

Backend runs on `http://localhost:4000`.

Before starting the backend, create a `.env` file in `backend` and configure PostgreSQL and Pinterest OAuth variables.
