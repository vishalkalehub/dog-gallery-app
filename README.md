# 🐶 Dog Gallery Web App

A full-stack web application built using FastAPI (backend) and React (frontend) that allows users to explore dog breeds, view images, like images, and track recently viewed breeds.

---

## Features

- Browse all dog breeds
- Search breeds by name
- View breed images (pagination / load more)
- Like / Unlike images (stored in database)
- Recently viewed breeds tracking
- Share images via link
- Responsive UI

---

## 🛠 Tech Stack

Frontend:
- React
- Axios
- React Router

Backend:
- FastAPI
- SQLite
- SQLAlchemy

API:
- https://dog.ceo/dog-api/

---

##  Project Structure

dog-gallery-app/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── database.py
│   │   ├── schemas.py
│   │   ├── crud.py
│   │   └── routes/
│   │       ├── like.py
│   │       └── viewed.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── BreedDetail.js
│   │   │   └── Liked.js
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   └── api.js

---

## ⚙️ Setup Instructions

### Backend

cd backend

python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload

Backend runs on:
http://127.0.0.1:8000

---

### Frontend

cd frontend

npm install
npm start

Frontend runs on:
http://localhost:3000

---

## 📡 API Endpoints

Likes:
- POST /like
- DELETE /like
- GET /like

Viewed:
- POST /viewed
- GET /viewed

---

## 📌 Notes

- Uses Dog CEO API for images
- Likes & viewed data stored locally in SQLite
- CORS enabled for frontend-backend communication

---

## 👨‍💻 Author

Vishal Kale
