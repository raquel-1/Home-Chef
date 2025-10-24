<h1 align="center">🍋 Home Chef — Vue 3 + Pinia + SCSS</h1>

<p align="center">
  <strong>A responsive recipe app built with Vue 3, Pinia, and SCSS.</strong><br>
  Search recipes, view details, download nutrient info as PDF, and share via WhatsApp.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3-42b883?logo=vue.js" />
  <img src="https://img.shields.io/badge/Pinia-State%20Manager-yellow" />
  <img src="https://img.shields.io/badge/SCSS-Styling-cc6699?logo=sass" />
  <img src="https://img.shields.io/badge/jsPDF-PDF%20Generation-4caf50" />
  <img src="https://img.shields.io/badge/Edamam-API-blue" />
  <img src="https://img.shields.io/badge/Vercel-Deployment-000000?logo=vercel" />
</p>

---

## 🌐 Live Demo

🔗 [Check out the Home Chef demo](https://home-chef-lemon.vercel.app/home)

---

## 🧭 Overview

**Home Chef** is a fully **frontend recipe app** that lets users:

- Search for recipes using the **Edamam API**  
- Explore detailed recipe information (ingredients, calories, nutrients)  
- Download a **PDF** with nutrient information  
- Share recipes via **WhatsApp**  
- Add and remove **favorite recipes**, stored in **Pinia** and persisted in **localStorage**  
- Toggle between **light and dark modes**  
- Enjoy a **responsive interface** across all devices  

> Since there is no backend, all user data is stored locally in the browser.

---

## ✨ Key Features

- 🔍 Real-time recipe search via Edamam API  
- 📝 Detailed recipe view (ingredients, nutrition facts)  
- 📄 PDF generation for nutrients using **jsPDF**  
- 📱 Share recipes via **WhatsApp**  
- ⭐ Add/remove recipes from **favorites**, saved in Pinia + localStorage  
- 🌙 Light/Dark mode toggle  
- 🌐 Fully responsive design  

---

## 🧠 Tech Stack

| Technology | Description |
|------------|-------------|
| **Vue 3 (Composition API)** | Frontend framework |
| **Pinia** | State management for favorites and UI |
| **SCSS** | Modular, responsive styling |
| **Vite** | Development and build tool |
| **jsPDF** | PDF generation |
| **Edamam API** | Recipe search and data |
| **localStorage** | Persistence for favorite recipes |

---

## ⚙️ Local Setup

```bash
# Clone the repository
git clone https://github.com/raquel-1/Home-Chef.git

# Enter the project folder
cd home-chef

# Install dependencies
npm install

# Start the development server
npm run dev -- --open
