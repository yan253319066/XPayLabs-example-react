# XPay Labs SDK React 示例

[English](README.md) | 中文

本项目演示了如何在 React 应用中集成 XPay Labs 加密货币支付网关 SDK。

## 功能特性

- 使用 API 凭证初始化 XPay Labs SDK
- 创建加密货币收款订单
- 创建加密货币付款订单
- 显示支付二维码
- 查询支付状态
- 获取支持的加密货币和链
- 验证 Webhook 签名

## 前置要求

- Node.js 14.x 或更高版本
- npm 或 yarn

## 安装

1. 克隆本仓库
2. 安装依赖：
```bash
npm install
```

## 配置

使用 XPay Labs 帐户前，您需要：

1. 在 [xpaylabs.com](https://www.xpaylabs.com) 注册帐户
2. 从控制台获取 API Key 和 Secret
3. 创建 `.env` 文件配置凭证

## 运行示例

```bash
npm start
```

浏览器访问 http://localhost:3001

## 许可证

MIT
