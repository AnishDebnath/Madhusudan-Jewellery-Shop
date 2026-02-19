# Madhusudan Jewellery Shop

A premium e-commerce platform for handcrafted luxury jewelry, blending heritage craftsmanship with modern technology. This application features a sophisticated shopping experience with AI-powered concierge services and Augmented Reality (AR) product try-ons.

## Features

- **Luxury Product Catalog**: Browse extensive collections of Gold, Diamond, Bridal, and Gemstone jewelry.
- **AI Concierge**: Personalized shopping assistance powered by Google Gemini AI.
- **AR Try-On**: Virtual try-on experience for selecting the perfect piece.
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
- **Dark/Light Mode**: Seamless theme switching for a comfortable viewing experience.
- **Shopping Cart & Wishlist**: Integrated cart management and wishlist functionality.
- **Secure Checkout**: Streamlined checkout process.
- **Store Locator**: Find our physical boutique locations in Kolkata.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Routing**: React Router DOM v6
- **AI Integration**: Google GenAI SDK (Gemini)
- **Icons**: Lucide React

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AnishDebnath/Madhusudan-Jewellery-Shop.git
    cd "Madhusudan Jewellery"
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add your Google Gemini API key:
    ```env
    GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components (Home, Category, Cart, etc.)
├── constants.ts     # Configuration and static data
├── types.ts         # TypeScript definitions
├── App.tsx          # Main application component with routing
└── index.css        # Global styles and Tailwind directives
```

## License

Distributed under the Copyright Rights Reserved License of Madhusudan Jewellery.

Designed & Developed with ❤️ by Anish Debnath