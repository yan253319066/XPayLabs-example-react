# XPay Labs（简称 xpay）React 示例 — 加密货币支付网关集成演示

[English](README.md) | 中文

这是一个 **React** 示例应用，演示如何将 [XPay Labs（简称 xpay）](https://www.xpaylabs.com) 自托管、非托管加密货币支付网关 SDK 集成到 React Web 应用中。支持在 TRON、EVM 链和 SUI 上接受 USDT/USDC 支付。

## 功能特性

- 使用 API 凭证初始化 XPay Labs SDK
- 创建加密货币收款和付款订单
- 显示支付二维码
- 实时支付状态查询
- Webhook 签名验证演示
- Material UI 组件库

## 快速开始

```bash
npm install
npm install @xpaylabs/node-sdk
cp .env.example .env
npm start
```

访问 http://localhost:3001

## 相关资源

- [XPay Labs 官网](https://www.xpaylabs.com)
- [Node.js SDK](https://github.com/yan253319066/XPayLabs-node-sdk)
- [Java SDK](https://github.com/yan253319066/XPayLabs-java-sdk)
- [Vue 3 示例](https://github.com/yan253319066/XPayLabs-example-vue)

## 仓库

**GitHub:** [yan253319066/XPayLabs-example-react](https://github.com/yan253319066/XPayLabs-example-react)
**Gitee（镜像）:** [XPayLabs/XPayLabs-example-react](https://gitee.com/XPayLabs/XPayLabs-example-react)

## 许可证

MIT
