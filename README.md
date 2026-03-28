# Madhusudan Jewellery Shop (Full-Stack)

A premium full-stack e-commerce platform for handcrafted luxury jewelry, blending heritage craftsmanship with modern technology. This application features a sophisticated shopping experience with a dedicated Express.js backend and a modern React frontend.

## Project Structure

This project uses a monorepo structure with `client` and `server` directories.

```
Madhusudan-Jewellery-Shop/
├── client/           # React Frontend (Vite, TypeScript, Tailwind)
│   ├── src/          # Source code
│   └── public/       # Static assets
├── server/           # Express Backend (Node.js)
│   ├── src/          # API logic, routes, and controllers
│   └── package.json  # Backend dependencies
├── package.json      # Root configuration for monorepo (npm workspaces)
└── README.md         # Project documentation
```

## Features

- **Luxury Product Catalog**: Browse extensive collections of Gold, Diamond, Bridal, and Gemstone jewelry.
- **AI Concierge**: Personalized shopping assistance powered by Google Gemini AI.
- **Express API**: Robust backend for handling products, categories, and orders.
- **AR Try-On**: Virtual try-on experience for selecting the perfect piece.
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
- **Dark/Light Mode**: Seamless theme switching for a comfortable viewing experience.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, Morgan, CORS, Dotenv
- **AI Integration**: Google GenAI SDK (Gemini)
- **Monorepo Management**: npm Workspaces, Concurrently

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AnishDebnath/Madhusudan-Jewellery-Shop.git
    cd "Madhusudan-Jewellery-Shop"
    ```

2.  **Install all dependencies:**
    From the root directory, run:
    ```bash
    npm install
    # This will install root dependencies and link client/server workspaces
    ```

3.  **Environment Setup:**
    Create a `.env` file in both `client/` and `server/` directories:
    
    **In client/.env.local:**
    ```env
    VITE_GEMINI_API_KEY=your_gemini_api_key_here
    ```

    **In server/.env:**
    ```env
    PORT=5000
    ```

4.  **Run the development server:**
    Run both frontend and backend concurrently from the root:
    ```bash
    npm run dev
    ```

5.  **Build for production:**
    ```bash
    npm run build
    ```

## License

Distributed under the Copyright Rights Reserved License of Madhusudan Jewellery.

Designed & Developed with ❤️ by Anish Debnath