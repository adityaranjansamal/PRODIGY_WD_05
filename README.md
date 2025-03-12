
# 🏖️ **Celestia Weather** 🌦️  
A modern weather app built with **React**, **SASS**, **Framer Motion**, and **OpenWeatherMap API**. It provides real-time weather data, 5-day forecasts, and animated UI elements.  

---

## 🚀 **Live Preview**  
👉 [**Live Demo**](https://adityarnsamal-celestia-weather.netlify.app/)  

---

## 🎯 **Features**  
✅ Real-time weather updates using OpenWeatherMap API 🌍  
✅ Dynamic 5-day forecast 🌤️  
✅ Framer Motion animations for smooth user experience 🎬  
✅ Font Awesome weather icons ⛅  
✅ Error handling for invalid locations ❌  
✅ Clean and modern SASS styling 🎨  
✅ Responsive design for mobile and desktop 📱  

---

## 📸 **Preview**  

 

https://github.com/user-attachments/assets/aaefe0b8-e112-46d8-8528-daa2b483e366



---

## 📂 **Folder Structure**  
```
├── dist
├── src
│   ├── api.js
│   ├── components
│   │   ├── WeatherCard.jsx
│   │   ├── FiveDayForecast.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   ├── styles
│   │   ├── WeatherCard.scss
│   │   ├── FiveDayForecast.scss
│   │   ├── Footer.scss
│   │   ├── Header.scss
│   │   ├── SearchBar.scss
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── index.js
│   ├── main.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ **Tech Stack**  
| Technology | Description |
|------------|-------------|
| **React** ⚛️ | JavaScript library for UI |
| **SASS** 🎨 | CSS preprocessor for better styling |
| **Framer Motion** 🏃 | Animation library |
| **Axios** 🌐 | For API calls |
| **OpenWeatherMap API** 🌍 | Weather data source |
| **Font Awesome** 🎯 | Icons |

---

## 📥 **Installation**  
Follow the steps below to clone and set up the project:

### 🚀 **Clone the repository**  
```bash
git clone https://github.com/adityaranjansamal/PRODIGY_WD_05.git
```

### 📂 **Change to project directory**  
```bash
cd PRODIGY_WD_05
```

### 📦 **Install dependencies**  
```bash
npm install
```

---

## 🚀 **Run the Project**  
Start the development server:  
```bash
npm run dev
```

---

## 🌍 **API Setup**  
1. Go to [OpenWeatherMap](https://openweathermap.org/) and create a free account.  
2. Get your API key from the **API Keys** section.  
3. Change the api key in the `api.js` file in the `src` directory and add:  

```
const API_KEY = Your_API_KEY_Here
```

---

## 🌦️ **Usage**  
1. Enter a city name in the search bar.  
2. Current weather data and a 5-day forecast will be displayed.  
3. If the location is invalid, an error message will appear.  

---

## 🏆 **How It Works**  
✅ The app fetches current weather and 5-day forecast using OpenWeatherMap API.  
✅ The `WeatherCard.jsx` displays current weather info.  
✅ The `FiveDayForecast.jsx` component extracts the forecast for **12:00 PM** each day and updates the UI.  
✅ **Framer Motion** is used for hover and transition animations.  
✅ Icons are dynamically updated using **Font Awesome**.  

---

## 💖 **Support**  
If you like this project, give it a ⭐ and share it with others! 😎  

---

## ⚠️ **Disclaimer**

**Copyright Notice:**<br>
This code belongs to **Aditya Ranjan Samal**.<br>
Unauthorized copying or sharing of this code without permission from the author is strictly prohibited.<br>
This project is intended for educational purposes only.

---
