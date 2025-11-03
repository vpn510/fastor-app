📦 Fastor ReactJS Assignment
A modern, offline-friendly React application built with Vite, TailwindCSS, and modular components. It includes a login system, restaurant discovery, image overlay with the Fastor logo, and PWA-ready sharing functionality.

🚀 Features
- 🔐 Login + OTP Flow
Users enter their mobile number and verify with a hardcoded OTP (123456).
- 📍 Restaurant Discovery
Displays a list of nearby restaurants using mock data or REST API.
- 🖼️ Image Superimposing
Shows restaurant image with Fastor logo overlay using HTML canvas.
- 🧲 Drag-to-Reposition Logo
Users can move the Fastor logo anywhere on the image before sharing.
- 📤 Web Share API
Allows sharing the final image to supported apps (mobile/PWA only).
- 🧪 Offline-Friendly Setup
Uses local assets and mock data for rapid prototyping.

🛠️ Tech Stack
- React + Vite – Fast development and build
- TailwindCSS – Clean, responsive UI
- React Router v6 – Route-based navigation
- HTML Canvas – Image overlay and export
- Web Share API – Native sharing support
- LocalStorage – Session management

📁 Folder Structure
src/
├── assets/                 # Static images (restaurants, logo)
├── components/             # Reusable UI components
├── pages/                  # Screens: Login, OTP, Dashboard, Detail
├── routes/                 # Centralized routing
├── services/               # API logic (optional)
├── utils/                  # Auth and canvas helpers
├── App.jsx                 # Root component
├── main.jsx                # Vite entry point
└── index.css               # Tailwind base styles



🧑‍💻 Setup Instructions
# 1. Clone the repo
git clone https://github.com/your-username/fastor-assignment.git
cd fastor-assignment

# 2. Install dependencies
npm install

# 3. Run the app
npm run dev



📸 Assets
Place your images in:
public/assets/restaurants/
  ├── spice-villa.jpg
  ├── urban-tadka.jpg
  └── cafe-nirvana.jpg

public/
  └── fastor-logo.png



📱 PWA Support
To enable full PWA functionality:
- Add manifest.json and service worker
- Install the app on mobile for native sharing

🏁 Bonus
- Drag-and-drop repositioning of the Fastor logo
- Modular components for easy scaling
- Clean, professional UI with bold accents

📬 Feedback
Feel free to reach out or fork the project to customize it further!
