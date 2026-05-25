# Data Analyst Portfolio - Fullstack MERN Application

A premium, interactive personal portfolio website for **Deepak Kaushal (Data Analyst)** upgraded to a fullstack MERN (MongoDB, Express, React, Node.js) application.

This project displays data analytics projects, provides specialized skill categories, contains a fully functional contact form that persists client inquiries directly to a MongoDB database, and is **pre-configured for flawless one-click deployment on Vercel**.

---

## 📂 Project Structure

The project is structured with clean, modular directories for frontend (client), backend (server), and Vercel serverless functions:

```text
Portfolio_Web_App/
├── api/                      # ⚡ Vercel Serverless Functions
│   ├── projects.js           # Serverless route for GET projects (with auto-seeding)
│   └── contact.js            # Serverless route for POST contact messages (with validators)
│
├── frontend/                 # 💻 React & Vite Frontend App
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
├── backend/                  # 🔌 Standalone Node.js & Express API Backend
│   ├── config/               # DB connection & shared seed data configurations
│   │   ├── db.js             # Global connection pool cache with serverless support
│   │   └── seedData.js       # Shared static seed projects
│   ├── models/               # Mongoose MongoDB schemas (Project, Message)
│   ├── routes/               # Express API endpoints
│   │   ├── projects.js       # Local Projects GET and seeding routing
│   │   └── contact.js        # Local Client messages POST routing
│   ├── server.js             # Main server execution file
│   ├── .env                  # Backend environment settings
│   └── package.json          # Backend dependencies & Nodemon setup
│
├── vercel.json               # 🌐 Vercel deployment & routing config
├── package.json              # Root-level workspace orchestrator
└── README.md                 # Project guide & instructions
```

---

## 🛠️ Key MERN Features Added

1. **Dual DB Connections**: Built with global database caching to support both traditional long-lived connections (standalone Express server) and serverless warm-starts (Vercel Lambdas) without leaking database connections.
2. **Database Auto-Seeding**: If the database starts empty or blank, the application automatically seeds your MongoDB database with default data from `seedData.js` on the first query!
3. **Resilient Static Fallback**: If MongoDB is down or unreachable, the frontend gracefully falls back to local static constants.
4. **Symmetrical Navigation Bar**: Designed with flex spacing so that the branding logo is on the left, action button is on the right, and the navigation pills are centered.
5. **Interactive Contact Form**: A fully functional message form, complete with validator alerts, loading spinners, and server-side storage.

---

## ⚡ Running Locally

### Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB** running locally (`mongodb://127.0.0.1:27017/`) or a **MongoDB Atlas Cloud URI**.

### 💻 Local Setup

1. **Navigate to the project root**:
   ```bash
   cd Portfolio_Web_App
   ```

2. **Install all dependencies**:
   Run the following command at the root directory. It automatically installs package dependencies for the root, frontend, and backend environments concurrently:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file inside the `backend/` folder:
   ```ini
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/portfolio_db
   NODE_ENV=development
   ```

4. **Launch the app locally**:
   Launch both the React dev server and the Express API server concurrently with a single command from the root directory:
   ```bash
   npm run dev
   ```
   - **Frontend client**: `http://localhost:3000`
   - **Backend API server**: `http://localhost:5000`

---

## 🌐 Vercel Deployment Guide

Deploying this MERN fullstack application on Vercel is streamlined and completely automated.

### Step 1: Create a MongoDB Atlas Database
1. Go to [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) and create a free cluster.
2. Under **Network Access**, allow access from anywhere (`0.0.0.0/0`) since Vercel's serverless IP addresses rotate dynamically.
3. Under **Database Access**, create a database user and password.
4. Get your connection string (format: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority`).

### Step 2: Push Your Project to GitHub
Push your local code to your GitHub, GitLab, or Bitbucket repository.

### Step 3: Deploy on Vercel
1. Go to the [Vercel Dashboard](https://vercel.com/) and click **Add New** > **Project**.
2. Import your portfolio repository.
3. Keep the default framework presets (Vercel automatically detects the root project settings and compiles using the preconfigured `vercel.json` scripts).
4. Expand the **Environment Variables** section and add:
   - **Name**: `MONGODB_URI` (or `MONGO_URI`)
   - **Value**: *Your MongoDB Atlas connection string from Step 1*
5. Click **Deploy**!

### How the Serverless Architecture Works on Vercel
- **Frontend**: Built from the `frontend/` folder and served as static HTML/JS/CSS assets via Vercel's high-speed CDN.
- **Backend API**: The `api/` directory is mapped directly. Any file inside `api/*.js` is compiled into a standalone **Vercel Serverless Function** running on Node.js.
- **Auto-Seeding**: Upon your first visit, the projects gallery will fetch `/api/projects`. The function will notice your MongoDB Atlas database is empty, automatically seed it, and instantly display your portfolio projects!

---

## 🖼️ How to Change the Profile Picture (PFP)

To customize the avatar displayed on the home page:

1. Replace the file at `frontend/public/profile_picture.png` with your own photo.
2. Ensure it is named exactly `profile_picture.png`.
3. The website will automatically update the profile image on refresh!
