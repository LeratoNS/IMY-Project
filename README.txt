LN Sibanda D1 P-14

# IMY-Project

1. GitHub link

   https://github.com/LeratoNS/IMY-Project.git

=== Deliverable 1 ===

Build Frontend & Backend locally
1. Install frontend deps: cd frontend && npm install
2. Build frontend: npm run build
3. Install backend deps: cd ../backend && npm install
4. Start backend (serves built frontend): npm start


Open http://localhost:8080 (Docker) or http://localhost:8080


Docker (single container for API + static site)

# Build image
docker build -t u22705504 .

# Run
docker run -p 8080:8080 u22705504

#Postman testing login
# http://localhost:8080/api/auth/login

{ "email": "test@example.com", "password": "secret123" }

{
    "ok": true,
    "message": "Logged in as test@example.com",
    "token": "dummy-jwt-token"
}


http://localhost:8080/home → Home page (feed + create project form).
