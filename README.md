# HireHub 2.0

> A Full Stack MERN Job Portal connecting students with recruiters through a modern, secure, and responsive platform.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-blue)

---

##  Overview

**HireHub 2.0** is a full-stack Job Portal built using the **MERN Stack** that enables students to discover job opportunities and recruiters to manage hiring efficiently.

The platform provides secure authentication, role-based access control, resume uploads via Cloudinary, real-time application tracking, and a responsive user experience.

---

##  Live Demo

### 🌐 Frontend
https://hirehub-snowy-rho.vercel.app/

### ⚙️ Backend API
https://hirehub-qgy4.onrender.com
---

#  Features

##  Student Portal

- Create an account and login securely
- Upload profile picture and resume
- Search jobs using keywords
- Browse companies and job listings
- Apply for jobs
- Track application status
- Receive recruiter updates

---

##  Recruiter Portal

- Register as a recruiter
- Create and manage company profiles
- Post new job opportunities
- View all applicants
- Accept or reject applications
- Manage company jobs from dashboard

---

##  Authentication & Security

- JWT Authentication
- Protected Routes
- Role-Based Access Control (RBAC)
- Password Encryption using bcrypt
- Secure Cookies
- Input Validation

---

##  Cloud Features

- Resume Uploads
- Profile Picture Uploads
- Cloudinary Integration
- MongoDB Atlas Database

---

##  Tech Stack

### Frontend

- React.js
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- Shadcn UI
- Radix UI
- Framer Motion

---

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary
- Cookie Parser
- CORS

---

### Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas
- Cloudinary

---

#  Project Structure

```
HireHub2.0
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middlewares
│   ├── utils
│   └── index.js
│
└── README.md
```
---

#  Installation

## Clone Repository

```bash
git clone https://github.com/as-batra/HireHub2.0.git

cd HireHub2.0
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file

```env
PORT=8000

MONGO_URI=YOUR_MONGODB_URI

SECRET_KEY=YOUR_SECRET_KEY

CLOUD_NAME=YOUR_CLOUDINARY_NAME

API_KEY=YOUR_CLOUDINARY_API_KEY

API_SECRET=YOUR_CLOUDINARY_SECRET
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:8000
```

Run Frontend

```bash
npm run dev
```

---

#  Environment Variables

### Backend

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| MONGO_URI | MongoDB Atlas URI |
| SECRET_KEY | JWT Secret |
| CLOUD_NAME | Cloudinary Cloud Name |
| API_KEY | Cloudinary API Key |
| API_SECRET | Cloudinary Secret |

### Frontend

| Variable | Description |
|----------|-------------|
| VITE_API_URL | Backend URL |

---

#  API Endpoints

### User

```
POST   /api/v1/user/register
POST   /api/v1/user/login
GET    /api/v1/user/profile
POST   /api/v1/user/logout
```

### Company

```
POST   /api/v1/company/register
GET    /api/v1/company/get
PUT    /api/v1/company/update
```

### Jobs

```
POST   /api/v1/job/post
GET    /api/v1/job/get
GET    /api/v1/job/get/:id
```

### Applications

```
POST   /api/v1/application/apply/:id
GET    /api/v1/application/get
POST   /api/v1/application/status/:id/update
```

---

#  Future Improvements

- Email Verification
- Forgot Password
- Resume Parsing
- AI Resume Analyzer
- AI Job Recommendation
- Interview Scheduling
- Chat between Recruiters & Students
- Admin Dashboard
- Notifications using Socket.io
- Dark Mode

---

#  Contributing

Contributions are always welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes

```bash
git commit -m "Added New Feature"
```

4. Push to the branch

```bash
git push origin feature/NewFeature
```

5. Open a Pull Request

---

# Author

**Arshjot Singh**

- GitHub: https://github.com/as-batra
- LinkedIn: https://www.linkedin.com/in/arshjot-singh-a4951a24b/
---

#  Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It motivates me to build more open-source projects!
