# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

XPayLabs React integration example, demonstrating how to integrate `@xpaylabs/node-sdk` in a React 18 app. Webpack 5 + Babel + MUI 5.

## Commands

```bash
npm install
npm start         # webpack-dev-server (localhost:3000)
npm run build     # Production build
npm test          # Stub command (no actual tests)
```

## Architecture

### Component Structure
```
src/
├── index.js              # Entry point
├── App.js                # Root component (React Router)
├── views/
│   ├── Home.js           # Login / credential config page
│   └── PaymentDemo.js    # SDK demo page
├── components/
│   ├── PaymentQRCode.js  # QR code display component
│   └── WebhookHandler.js # Webhook verification demo
└── services/
    └── XPayService.js    # @xpaylabs/node-sdk wrapper
```

### Demo Features
- SDK initialization (API Key + Secret)
- Create collection order → display QR code
- Real-time status polling
- Webhook verification demo

## Environment Variables

Injected via webpack DefinePlugin (`dotenv`):
- `REACT_APP_XPAY_API_KEY`
- `REACT_APP_XPAY_API_SECRET`
- `REACT_APP_XPAY_BASE_URL`

## Notes

- Uses Webpack 5 (not Create React App)
- MUI 5 as UI component library
- Includes `crypto-js`, `crypto-browserify`, `buffer` for crypto polyfills
- Suitable as a reference template for integrating `@xpaylabs/node-sdk` in new projects
