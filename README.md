# 🌟 Nexus: Stellar Crowdfunding dApp

[![Stellar CI Pipeline](https://github.com/akankshapatil99/stellar-level-3/actions/workflows/ci.yml/badge.svg)](https://github.com/akankshapatil99/stellar-level-3/actions/workflows/ci.yml)
[![Demo](https://img.shields.io/badge/Live%20Demo-Vercel-blue?style=for-the-badge&logo=vercel)](https://frontend-liard-beta-68.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Nexus is a premium, decentralized crowdfunding platform powered by the **Stellar Soroban Network**. It enables users to fund high-impact initiatives with 100% on-chain transparency, rewarding contributors with native **NXS (Nexus)** tokens for every donation.

---

## 📸 Project Showcase

### 🖥️ Dashboard & Global Impact
![Dashboard Overview](./l2ss/Screenshot%202026-03-02%20183316.png)
*Modern, glassmorphism UI featuring real-time platform stats and animated background elements.*

### 📱 Mobile Responsive Design
| Desktop View | Mobile Sidebar |
| :---: | :---: |
| ![Desktop](./l2ss/Screenshot%202026-03-02%20183339.png) | ![Mobile Menu](./l2ss/Screenshot%202026-03-02%20183405.png) |

### 🎖️ On-Chain Proof of Gratitude
![Certificate](./l2ss/Screenshot%202026-03-02%20183451.png)
*Donors receive a downloadable, cryptographically verified Certificate of Gratitude after every contribution.*

---

## ✨ Advanced Features & Recent Updates

- **💰 NXS Reward Token Mechanics**: Integrated a custom token engine. Donors automatically receive **10 NXS tokens per 1 XLM** contributed, minted directly by the smart contract.
- **📊 Global Impact Visualization**: A platform-wide progress bar tracking collective goals across all verified initiatives.
- **📱 100% Mobile Responsive**: Fully adaptive layout with a custom slide-out side menu, optimized for all screen sizes (1024px, 768px, 480px).
- **📋 Transaction History**: Real-time integration with **Stellar Expert** and native on-chain history tracking for connected wallets.
- **⚡ Performance & UX**: 
  - **Animated Loading Screen**: Smooth initial startup state.
  - **Automatic Polling**: Account balances (XLM & NXS) refresh every 30 seconds automatically.
  - **Copy-to-Clipboard**: Quick wallet address sharing directly from the header.
- **♿ Accessibility & SEO**: Built with `prefers-reduced-motion` support, smooth scrolling, and optimized meta tags for search engines.

---

## 🛠️ Tech Stack & Architecture

- **Smart Contracts**: Rust + Soroban SDK (No-std, optimized for WASM).
- **Frontend**: React (Vite), Vanilla CSS, Stellar SDK.
- **Wallet Support**: Freighter & Rabet (Multi-wallet integration).
- **CI/CD**: GitHub Actions (Automated build & test pipelines for Rust and React).
- **Hosting**: Vercel (Frontend) + Stellar Testnet (Backend).

---

## 🧪 Smart Contract Testing

We maintain a rigorous testing suite covering edge cases, token boundaries, and platform logic.

```bash
# Run the contract tests
cd contract
cargo test
```

![Test Results](./l2ss/cargo%20tests.png)
*Verifying 5+ critical test cases including zero-donation guards and NXS balance tracking.*

---

## 📜 14+ Meaningful Commits Summary

The project has evolved through professional, atomic commits following conventional standards:
1. **feat(seo)**: Added meta tags, Open Graph, and descriptive titles.
2. **feat(a11y)**: Implemented smooth scroll and reduced-motion support.
3. **docs(contract)**: Added comprehensive Rustdoc to all public functions.
4. **test(contract)**: Expanded test suite to cover zero-donation panics.
5. **feat(frontend)**: Added global loading screen and balance polling.
6. **refactor(frontend)**: Modularized static data into a clean `config.js`.
7. **style(ui)**: Custom color-coded status toasts (Green/Red/Blue).
8. **chore(gitignore)**: Expanded rules for CI/CD and build artifacts.
... *and more.*

---

## ⚙️ Development Setup

Refer to our **[CONTRIBUTING.md](./CONTRIBUTING.md)** for detailed environment setup, local deployment instructions, and coding standards.

### Quick Start
```bash
# Install frontend dependencies
cd frontend
npm install

# Build the contract
cd ../contract
cargo build --target wasm32-unknown-unknown --release
```

---

## 🤝 Community & Support
- **Developer**: Akanksha Patil
- **Network**: Stellar Testnet (Soroban)
- **Discord**: [Stellar Developers](https://discord.gg/stellardev)

---
*Built with ❤️ for the Stellar Ecosystem.*
