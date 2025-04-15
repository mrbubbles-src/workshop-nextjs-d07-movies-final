# 🎬 Next.js Movie Search Workshop - Final Version

## Description

This is a Next.js 15 (App Router) workshop app for movie search, watchlist, login/registration, and uses a fake backend with LowDB + JSONBin. The goal is to learn the basics of Next.js and how to build a modern web application.

## Technologies

- Next.js 15
- Tailwind CSS 4
- Font Awesome
- LowDB
- JSONBin
- OMDB API
- ShadCN UI

## Features

- Movie search
- Detail pages
- Login/registration
- Watchlist with favorites
- Carousel components
- Dark mode
- SSR and client components

## Project Structure

```
📁 app
├── 📁 api
│   ├── 📁 login
│   │   └── route.js
│   ├── 📁 register
│   │   └── route.js
│   ├── 📁 watchlist
│   │   └── route.js
│   ├── db.js
├── 📁 content
│   ├── 📁 [slug]
│   │   └── page.jsx
│   ├── 📁 dashboard
│   │   └── page.jsx
│   ├── 📁 login
│   │   └── page.jsx
│   ├── 📁 register
│   │   └── page.jsx
│   └── 📁 search
│       └── page.jsx
├── globals.css
├── layout.jsx
├── loading.jsx
├── not-found.jsx
└── page.jsx
📁 components
├── 📁 auth
│   └── AuthForm.jsx
├── 📁 content
│   ├── 📁 search
│   │   ├── Search.jsx
│   │   └── SearchResults.jsx
│   ├── ContentCard.jsx
│   ├── PopularNow.jsx
│   └── UserDashboard.jsx
├── 📁 layout
│   ├── 📁 Navbar
│   │   ├── Navbar.jsx
│   │   └── Auth.jsx
│   ├── Footer.jsx
│   └── Herosection.jsx
├── 📁 ui
│   ├── 📁 Carousel
│   │   ├── button.jsx
│   │   └── carousel.jsx
│   ├── 📁 NavLink
│   │   └── NavLink.jsx
│   ├── FavoriteButton.jsx
│   ├── LoadingIndicator.jsx
│   └── ScrollIntoViewButton.jsx
📁 context
├── AuthProvider.jsx
└── SearchProvider.jsx
│
📁 hooks
└── useActivePath.js
📁 lib
└── utils.js
📁 public
└── 📁 images
    ├── favicon.svg
    ├── hero-bg-alternate.png
    ├── hero-bg.png
    ├── image-not-found.png
    ├── loading.gif
    ├── logo.svg
    └── matrix-bg.gif
```

## Starting the Project

```
npm install
npm run dev
```

## Note

This project is for learning purposes only. No real backend, no real authentication.
