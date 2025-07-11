# 📝 QuickNotes — MERN Stack Notes App with 3D Book

A fully featured MERN stack (MongoDB, Express, React, Node.js) web application to create and manage personal notes, now upgraded with:

- ✨ Modern 3D Hero Section with Death Note (.glb) model
- 🎬 Smooth UI animations using Framer Motion
- 🔒 JWT Authentication (Login/Signup)
- 📦 Dockerized frontend, backend, and MongoDB
- 📱 Fully responsive, glassmorphic UI with vertical 3D model support

---

## 🔥 Live Demo (Optional)

> _If deployed, put your link here (e.g., Vercel + Railway)_  
> https://quicknotes-ai3d.vercel.app

---

## 📸 Preview

![3D Hero Book](./public/assets/demo-preview.png)

---

## 🛠️ Features

- ✅ User Signup & Login (JWT Auth)
- 🧠 Create, View & Manage Notes
- 📦 Persistent MongoDB Storage
- 🧊 3D Model: Death Note (GLB) with OrbitControls
- ✨ Framer Motion animations
- 💻 Docker for frontend/backend/database
- 📱 Responsive UI

---

## 📁 Folder Structure

```
📦quicknotes-app/
 ┣ 📁client/              # React App (Frontend)
 ┃ ┣ 📁public/
 ┃ ┣ 📁src/
 ┃ ┃ ┣ 📜Hero3DModel.js   # 3D Canvas Model Viewer
 ┃ ┃ ┣ 📜App.js
 ┃ ┃ ┣ 📜Login.js / Signup.js
 ┃ ┃ ┣ 📜Dashboard.js
 ┃ ┃ ┣ 📜axios.js
 ┃ ┃ ┗ 📜index.css
 ┣ 📁server/              # Express Server (Backend)
 ┃ ┣ 📁routes/notes.js
 ┃ ┣ 📁routes/auth.js
 ┃ ┣ 📁models/Note.js
 ┃ ┣ 📁models/User.js
 ┃ ┣ 📜server.js
 ┗ 📜docker-compose.yml
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/quicknotes-3d.git
cd quicknotes-3d
```

### 2. Run with Docker 🐳

```bash
docker-compose up --build
```

This will start:

- 📦 MongoDB on port `27017`
- 🌐 Frontend on port `3000`
- 🔙 Backend on port `5050`

---

## 🔐 .env Setup (Backend)

Create a `.env` file inside `/server/`:

```env
PORT=5050
MONGO_URI=mongodb://mongo:27017/quicknotes
JWT_SECRET=yourSuperSecretKey
```

---

## ✨ 3D Model Details

- Located at: `client/public/models/death_note.glb`
- Rendered using `@react-three/fiber` and `drei`
- Centered, scaled, vertically positioned to mimic realistic 3D notebook

---

## 📦 Dependencies

### Frontend

```bash
npm install axios react-bootstrap react-router-dom framer-motion
npm install three @react-three/fiber @react-three/drei
```

### Backend

```bash
npm install express mongoose jsonwebtoken bcrypt cors dotenv
```

---

## 🧪 Sample Credentials (Testing)

```json
{
  "username": "demoUser",
  "password": "demoPass"
}
```

---

## 🧠 Credits

- 3D Model: [Death Note GLB](/public/models/death_note.glb)
- Built by: **Siddharth Jagtap**
- UI Design: Custom + Bootstrap + Glassmorphism

---

## 📜 License

This project is licensed under MIT. Use freely and contribute!
