# XPay Labs React Example — Crypto Payment Gateway Integration Demo

English | [中文](README.zh.md)

A **React** example application demonstrating how to integrate the [XPay Labs](https://www.xpaylabs.com) self-hosted, non-custodial crypto payment gateway SDK into a React web application. Accept USDT/USDC payments on TRON, EVM chains, and SUI.

## Features

- Initialize the XPay Labs SDK with API credentials
- Create cryptocurrency collection and payout orders
- Display payment QR codes for customers
- Real-time payment status checking
- Webhook verification demo
- Material UI components
- Environment-based configuration

## Prerequisites

- Node.js 14.x or higher
- npm or yarn

## Installation

```bash
npm install
npm install @xpaylabs/node-sdk
```

## Configuration

```bash
cp .env.example .env
# Edit .env with your XPay Labs API credentials
```

## Running

```bash
npm start
```

Open [http://localhost:3001](http://localhost:3001)

## Project Structure

```
src/
├── views/
│   ├── Home.js           # Landing page with SDK information
│   └── PaymentDemo.js    # Main demo with SDK integration examples
├── components/
│   ├── PaymentQRCode.js  # QR code display component
│   └── WebhookHandler.js # Webhook verification demo
└── services/
    └── XPayService.js    # XPay Labs SDK wrapper
```

## Related Resources

- [XPay Labs Website](https://www.xpaylabs.com)
- [Node.js SDK](https://github.com/yan253319066/XPayLabs-node-sdk)
- [Java SDK](https://github.com/yan253319066/XPayLabs-java-sdk)
- [Vue 3 Example](https://github.com/yan253319066/XPayLabs-example-vue)
- [Vue Demo (E-Commerce)](https://github.com/yan253319066/XPayLabs-demo-vue)
- [Checkout Page](https://github.com/yan253319066/XPayLabs-checkout)

## License

MIT
