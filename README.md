# WhatsApp Product Review Collector - Frontend

React frontend for displaying product reviews collected via WhatsApp.

## 🚀 Features

- Real-time review display
- Responsive grid layout
- Auto-refresh capability
- Clean, modern UI with gradient background
- Mobile-friendly design

## 📋 Prerequisites

- Node.js 14+
- npm or yarn

## 🛠️ Setup

### 1. Clone Repository
```bash
git clone https://github.com/Jdpradnya/whatsapp-review-frontend.git
cd whatsapp-review-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env`:
```env
REACT_APP_API_URL=http://localhost:8000
```

For production, set this to your deployed backend URL.

### 4. Run Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📱 Features

### Review Display
- Shows all reviews in a responsive grid
- Each card displays:
  - Product name
  - Review text
  - Reviewer name
  - Contact number
  - Timestamp

### Refresh Button
- Manual refresh to fetch latest reviews
- Smooth loading states

### Responsive Design
- Desktop: Multi-column grid
- Mobile: Single column layout
- Smooth hover effects

## 🎨 UI Components

### Color Scheme
- Primary: Purple gradient (#667eea to #764ba2)
- Cards: White with shadow
- Text: Dark gray (#333)
- Accents: Purple tones

### Layout
- Header with title and count
- Grid of review cards
- Refresh button at bottom

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `build`
4. Add environment variable: `REACT_APP_API_URL`

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/whatsapp-review-frontend",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

## 🔗 Backend Integration

This frontend connects to the FastAPI backend at the URL specified in `REACT_APP_API_URL`.

Make sure your backend:
- Is running and accessible
- Has CORS enabled for your frontend domain
- Exposes the `/api/reviews` endpoint

## 📝 License

MIT License
