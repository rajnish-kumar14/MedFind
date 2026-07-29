# 🩺 MediFind

MediFind is a full-stack web application that helps users search for medicine availability and allows administrators to manage medicine records. It includes secure user authentication and complete CRUD operations.

---

## 🚀 Features

- 🔐 User Signup & Login
- 🔑 JWT Authentication
- 🔒 Password Hashing using bcrypt
- 💊 Search Medicines
- ➕ Add Medicines
- ✏️ Update Medicines
- 🗑️ Delete Medicines
- 📦 MongoDB Database Integration
- 🎨 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt

---

## 📁 Project Structure

```
MedFind/
│
├── client/
│   ├── css/
│   ├── js/
│   ├── pages/
│   └── index.html
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── .env
│   ├── server.js
│   └── package.json
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/rajnish-kumar14/MedFind.git
```

### Go to the server folder

```bash
cd server
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

### Start the server

```bash
npm start
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /signup | Register User |
| POST | /login | Login User |

### Medicines

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /medicine | Get/Search Medicines |
| POST | /medicine | Add Medicine |
| PUT | /medicine/:id | Update Medicine |
| DELETE | /medicine/:id | Delete Medicine |

---

## 👨‍💻 Author

**Rajnish Kumar**

Information Science & Engineering

SJB Institute of Technology

---

## ⭐ Future Improvements

- Medicine Images
- Role-Based Access Control
- Search Filters
- Pagination
- Better Dashboard UI
