# Data Analyst Portfolio - Fullstack MERN Application

A premium, interactive personal portfolio website for **Deepak Kaushal (Data Analyst)** upgraded to a fullstack MERN (MongoDB, Express, React, Node.js) application.

This project displays data analytics projects, provides specialized skill categories, and contains a fully functional contact form that persists client inquiries directly to a MongoDB database.

---

## 📂 Project Structure

The project has been separated into clean, modular directories for frontend (client) and backend (server) environments:

```text
Portfolio_Web_App/
├── frontend/                 # React & Vite Frontend App
│   ├── public/               # Static assets
│   │   └── profile_picture.png # Profile Picture / PFP
│   ├── src/                  # React Components & styling
│   │   ├── components/       # Header, Hero, About, Projects, Contact, Footer
│   │   ├── constants.js      # Fallback static project & skill data
│   │   ├── App.jsx           # Main component & routing logic
│   │   └── index.css         # Styling system (Tailwind CSS)
│   ├── package.json          # Frontend dependencies & scripts
│   └── vite.config.js        # Vite build configurations with backend proxy
│
├── backend/                  # Node.js & Express API Backend
│   ├── config/               # DB connection configurations
│   ├── models/               # Mongoose MongoDB schemas (Project, Message)
│   ├── routes/               # Express API endpoints
│   │   ├── projects.js       # Projects GET and seeding routing
│   │   └── contact.js        # Client messages POST routing
│   ├── server.js             # Main server execution file
│   ├── .env                  # Backend environment settings
│   └── package.json          # Backend dependencies & Nodemon setup
│
├── package.json              # Root-level workspace orchestrator
└── README.md                 # Project guide & instructions
```

---

## 🛠️ Key MERN Features Added

1. **Database Seeding**: The backend automatically seeds MongoDB with default project details from `constants.js` if the collection is empty.
2. **MongoDB Data Retrieval**: The project gallery queries the database directly (`GET /api/projects`) instead of loading from hardcoded files.
3. **Resilient Fallback**: If MongoDB is down or unreachable, the frontend gracefully falls back to local static constants.
4. **Interactive Contact Form**: A fully functional message form at the bottom, complete with validator alerts, loading spinners, and server-side storage (`POST /api/contact`).
5. **Vite API proxy**: Built-in developer proxy avoiding CORS issues during local setup.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16+ recommended)
- **MongoDB** running locally (`mongodb://127.0.0.1:27017/`) or a **MongoDB Atlas Cloud URI**.

---

### 💻 Installation & Setup

1. **Clone or navigate to the workspace directory**:

   ```bash
   cd Portfolio_Web_App
   ```

2. **Install all dependencies**:
   Run the following command at the root directory. It will automatically install the package dependencies for the root, frontend, and backend environments:

   ```bash
   npm install
   ```

3. **Backend Environment Setup**:
   Create a `.env` file inside the `backend/` folder (a default `.env` is already configured for local MongoDB):
   ```ini
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/portfolio_db
   NODE_ENV=development
   ```

---

### ⚡ Running the Application

You can launch both the React dev server and the Express API server concurrently with a single command from the root directory:

```bash
npm run dev
```

- **Frontend client** runs on: `http://localhost:3000` (or the next available port)
- **Backend API server** runs on: `http://localhost:5000`

---

## 🖼️ How to Change the Profile Picture (PFP)

To customize the avatar displayed on the home page:

1. Replace the file at [frontend/public/profile_picture.png](file:///c:/Users/Asus/Documents/CLG/ReactJs/Portfolio_Web_App/frontend/public/profile_picture.png) with your own photo.
2. Ensure it is named exactly `profile_picture.png` (or change the reference in `Hero.jsx` if you use a `.jpg` or `.svg`).
3. The website will automatically update the profile image on refresh!
