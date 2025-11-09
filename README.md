# BrightSun Solar - Full Stack Application

A modern solar energy company website built with React (frontend) and NestJS (backend), combined in a single deployable structure.

## 🏗️ Project Structure

```
/home/dennis/Desktop/solar/
├── src/                      # Backend source (NestJS)
│   ├── main.ts              # Application entry point
│   ├── app.module.ts        # Main module with static file serving
│   ├── contact.controller.ts # Contact form API endpoint
│   └── contact.dto.ts       # Contact data validation
├── client/                   # Frontend source (React + Vite)
│   ├── src/
│   │   ├── pages/           # Home, About, Services, Projects, Contact
│   │   ├── components/      # Nav, Footer
│   │   ├── styles.css       # Global styles
│   │   ├── App.jsx          # React Router setup
│   │   └── main.jsx         # React entry point
│   ├── package.json
│   └── vite.config.js
├── dist/                     # Compiled backend (after build)
├── package.json              # Root package with unified scripts
├── tsconfig.json             # TypeScript configuration
└── README.md
```

## 🚀 Getting Started

### Installation

Install all dependencies (both backend and frontend):

```bash
npm run install:all
```

Or install separately:
```bash
npm run install:server  # Install backend dependencies
npm run install:client  # Install frontend dependencies
```

### Development Mode

Run both frontend and backend in development mode with hot reload:

```bash
npm run dev
```

This runs:
- Backend on `http://localhost:4000` (NestJS API)
- Frontend on `http://localhost:3000` (Vite dev server with HMR)

Or run them separately:
```bash
npm run dev:server  # Start backend only
npm run dev:client  # Start frontend only (in another terminal)
```

### Production Build

Build the entire application:

```bash
npm run build
```

This will:
1. Compile TypeScript backend to `/dist`
2. Build React frontend to `/client/dist`

### Production Start

After building, start the production server:

```bash
npm start
```

The server will run on `http://localhost:4000` and serve:
- Static frontend files at `/`
- API endpoint at `/contact`

## 📦 Deployment

For deployment to platforms like Heroku, Railway, Render, or DigitalOcean:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Environment Variables:**
   - `PORT` - Server port (defaults to 4000)

### Deployment Tips

- The backend serves the built frontend as static files
- All API routes are under `/contact` (excluded from static serving)
- Frontend uses relative URLs (`/contact`) so it works in any environment
- Single server = easier deployment and lower costs

## 🛠️ Technology Stack

### Backend
- **NestJS 10** - Progressive Node.js framework
- **Express** - HTTP server
- **TypeScript** - Type safety
- **CORS** - Cross-origin support

### Frontend
- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Vite 5** - Build tool with HMR
- **Custom CSS** - Modern responsive design with animations

## 📄 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run install:all` | Install all dependencies |
| `npm run dev` | Run both servers in development |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run dev:server` | Backend dev server only |
| `npm run dev:client` | Frontend dev server only |
| `npm run build:server` | Build backend only |
| `npm run build:client` | Build frontend only |

## 🌐 Features

- **5 Pages:** Home (with hero carousel), About, Services, Projects, Contact
- **Auto-rotating Hero:** 5 images with 5-second transitions
- **Modern UI:** Animations, shadows, responsive design
- **Contact Form:** Full backend integration with validation
- **Responsive:** Breakpoints at 1200px, 900px, 640px
- **Real Images:** Unsplash solar panel imagery
- **Single Server Deployment:** Frontend and backend unified

## 📞 API Endpoints

- `POST /contact` - Submit contact form
  - Body: `{ name, email, phone, propertyType, message }`
  - Returns: `{ ok: true }`

## 🎨 Design System

- **Container:** 1400px max-width with 4rem padding
- **Colors:** Cyan accent (#0891b2), Orange secondary (#f59e0b)
- **Animations:** fadeIn, float, pulse, stagger effects
- **Grid System:** Auto-fit with 350px minimum, 3rem gaps

---

Built with ❤️ for BrightSun Solar
