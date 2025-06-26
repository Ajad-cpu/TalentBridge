**TalentBridge**
*A full-stack talent-matching platform connecting candidates and recruiters.*

---

## 🚀 Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Technology Stack](#technology-stack)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

---

## 📖 Overview

TalentBridge is an end-to-end solution for streamlined recruitment. It offers:

* **Optimized Candidate Discovery**: Advanced filters and intelligent matching.
* **Seamless Communication**: Built-in chat, alerts, and document exchange.
* **Data-Driven Insights**: Real-time dashboards for recruiter analytics.

Designed for scalability and responsiveness, TalentBridge empowers HR teams to find and hire top talent more efficiently.

---

## 💡 Key Features

* **OTP Authentication**: Secure login via One-Time Password (NextAuth.js).
* **Profile Management**: Create & update resumes, portfolios, and skill tags.
* **Job Posting & Applications**: Post roles, review candidates, and track application status.
* **Real-Time Notifications**: Email & in-app alerts for new matches, messages, and updates.
* **Analytics Dashboard**: Charts for application trends, response rates, and time-to-hire.

---

## 🛠 Technology Stack

* **Front-end:** Next.js, React, Tailwind CSS
* **Back-end:** Node.js, Express.js (API routes)
* **Authentication:** NextAuth.js (OTP via email)
* **Database:** MongoDB Atlas (Mongoose ORM)
* **Deployment:** Vercel
* **Tooling:** Git, ESLint, Prettier, VS Code

---

## 🏁 Getting Started

1. **Clone the Repo**

   ```bash
   git clone https://github.com/Ajad-cpu/TalentBridge.git
   cd TalentBridge
   ```
2. **Install Dependencies**

   ```bash
   npm install
   # or yarn install
   ```
3. **Environment Variables**
   Create a `.env.local` in the project root with:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   ```
4. **Run Locally**

   ```bash
   npm run dev
   # visit http://localhost:3000
   ```

---

## 🎬 Usage

* Navigate to `/auth/signup` to register or login.
* Post a job as a recruiter under `/recruiter/dashboard`.
* Browse candidate profiles and message them directly.
* View analytics at `/recruiter/analytics`.

---

## 🚀 Deployment

1. Connect GitHub repo to Vercel.
2. Set the same environment variables under **Project Settings → Environment Variables**.
3. Deploy — Vercel will automatically build and publish the app.

---

## 🤝 Contributing

We welcome contributions!

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "feat: Add YourFeature"`
4. Push to your branch: `git push origin feature/YourFeature`
5. Open a Pull Request and describe your changes.

Please follow the existing code style and include tests for new functionality.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
