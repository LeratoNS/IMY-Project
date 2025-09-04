FROM node:20-alpine AS build-frontend
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

FROM node:20-alpine AS server
WORKDIR /app
COPY backend/package.json backend/package-lock.json ./backend/
RUN cd backend && npm ci
COPY backend/ ./backend/
RUN mkdir -p backend/public
COPY --from=build-frontend /app/frontend/dist/ ./backend/public/
EXPOSE 5173
WORKDIR /app/backend
CMD ["npm", "start"]
