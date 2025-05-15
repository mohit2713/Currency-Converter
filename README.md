# Currency Converter App 💱

A simple currency converter built using **React**, **Vite**, **TailwindCSS**, and a **live currency exchange API**. Supports conversion between any global currencies with real-time exchange rates.

---

## 📦 Tech Stack

* [Vite](https://vitejs.dev/) - Fast build tool
* [React](https://react.dev/) - UI library
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
* [https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${CurrencyName}.json] - Free live currency rates

---

## 🌐 Live Demo

**Live URL:** [https://beamish-paletas-1017b7.netlify.app/]

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mohit2713/Currency-Converter.git
cd currency-converter
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up TailwindCSS

Already configured. Ensure your `tailwind.config.js` and `index.css` include:

```js
// tailwind.config.js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
]
```

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run the Dev Server

```bash
npm run dev
```


## ✨ Features

* Convert between 100+ currencies
* Real-time exchange rate updates
* Swap currencies
* Responsive & clean UI with Tailwind
* Zero leading/trailing zero issues in input




