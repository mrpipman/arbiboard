# Arbiboard™

💡 Arbiboard™ è un'applicazione Web3 avanzata per la creazione, gestione e monetizzazione di strategie decentralizzate in ambito crypto.

## 🌐 Live Preview
🔗 https://arbiboard.vercel.app

## 🚀 Features
- Runtime Engine Reale (strategia attiva)
- Wallet Auth via Ethers.js (firma, sessione)
- XP System, DAO mock & builder
- Premium Strategy Gating
- Gamification UX + Leaderboard
- WebSocket console in tempo reale

## 🧱 Stack
- Next.js + Tailwind + Zustand + Ethers.js
- WebSocket backend + middleware auth
- LocalStorage DAO + Runtime Executor
- Pronto per Sepolia / Alchemy / Smart Contract deploy

## 🛠️ Setup
```bash
git clone https://github.com/tuo-utente/arbiboard.git
cd arbiboard
cp .env.example .env.local
npm install
npm run dev
```

## 🧪 Test
```bash
npm run test
```

## 📦 Deployment
Automated via Vercel CI/CD. Each push to `main` triggers build & deploy.
