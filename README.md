# 🎮 Gamer News Hub

A modern, sleek web application that aggregates and searches gaming news and discussions from Reddit. Built with Next.js 15, TypeScript, and cutting-edge UI components for an immersive gaming news experience.

![Gamer News Hub](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🔍 Smart Search**: Search across multiple gaming subreddits simultaneously
- **🎨 Modern UI**: Beautiful dark theme with smooth animations and 3D effects
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **⚡ Fast Performance**: Built with Next.js 15 and optimized for speed
- **🎭 Interactive Components**: Engaging UI with Framer Motion animations
- **🔄 Real-time Data**: Fresh content from Reddit's API
- **🎯 Targeted Results**: Search across gaming, PC gaming, console, and news subreddits

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### UI & Animations
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Custom 3D Components** - Interactive card effects

### Data & State
- **TanStack Query** - Powerful data fetching and caching
- **Reddit API** - Real-time gaming content aggregation

### Development
- **ESLint** - Code linting
- **Turbo** - Fast builds and development
- **Bun** - Fast JavaScript runtime

## 🏗️ Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── api/reddit/        # Reddit API integration
│   ├── search/            # Search results page
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── home/             # Landing page components
│   ├── search/           # Search page components
│   └── ui/               # Base UI components
└── lib/                  # Utilities and types
    ├── types.ts          # TypeScript definitions
    └── utils.ts          # Helper functions
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kinshuk8/gamer-news-hub.git
   cd gamer-news-hub
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Basic Search
1. Enter a keyword in the search field (e.g., "Cyberpunk 2077", "PS5", "gaming news")
2. Click "Search" or press Enter
3. Browse through the curated results from multiple gaming subreddits

### Advanced Features
- **Multi-subreddit Search**: Automatically searches across popular gaming communities
- **Real-time Results**: Fresh content from Reddit's API
- **Responsive Grid**: Optimized layout for all screen sizes
- **Interactive Cards**: Hover effects and smooth animations

## 🔧 Available Scripts

```bash
# Development
bun run dev          # Start development server with Turbo
npm run dev

# Production
bun run build        # Build for production
bun run start        # Start production server
npm run build
npm run start

# Code Quality
bun run lint         # Run ESLint
npm run lint
```

## 🎯 Default Subreddits

The app searches across these gaming communities by default:

- r/gaming
- r/pcgaming
- r/xboxone
- r/NintendoSwitch
- r/nintendo
- r/gamingnews
- r/gamernews
- r/playstation
- r/Steam

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **Reddit API** - For providing access to gaming discussions
- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations

## 📞 Support

If you have any questions or suggestions, feel free to:
- Open an issue on GitHub
- Start a discussion in the repository
- Contact the maintainers

---

**Made with ❤️ for gamers, by gamers**
