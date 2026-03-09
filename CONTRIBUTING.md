# Contributing to Nexus – Stellar Crowdfunding dApp

Thank you for your interest in contributing! Here's how to get started.

## Tech Stack

| Layer | Technology |
|---|---|
| Smart Contract | Rust + Soroban SDK |
| Frontend | React (Vite) |
| Blockchain | Stellar Testnet (Soroban) |
| CI/CD | GitHub Actions |

## Prerequisites

- [Rust](https://rustup.rs/) with `wasm32-unknown-unknown` target
- [Node.js](https://nodejs.org/) v18+
- [Stellar Freighter Wallet](https://www.freighter.app/) browser extension

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/akankshapatil99/stellar-level-3.git
cd stellar-level-3

# 2. Build the smart contract
cd contract
cargo build --target wasm32-unknown-unknown --release

# 3. Run contract tests
cargo test

# 4. Start the frontend
cd ../frontend
npm install
npm run dev
```

## Project Structure

```
.
├── contract/          # Rust Soroban smart contract
│   └── src/
│       ├── lib.rs     # Contract logic
│       └── test.rs    # Contract tests
├── frontend/          # React + Vite frontend
│   └── src/
│       ├── App.jsx    # Main application
│       ├── App.css    # Styles
│       └── contract.js # Contract client setup
└── .github/workflows/ # CI/CD pipeline
```

## Making Changes

1. **Fork** the repository and create a feature branch: `git checkout -b feat/your-feature`
2. Make your changes with clear, atomic commits using [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` – New features
   - `fix:` – Bug fixes
   - `docs:` – Documentation
   - `style:` – Formatting/CSS
   - `test:` – New or updated tests
   - `chore:` – Build/config changes
3. Run the tests before pushing: `cargo test` (contract) and `npm run build` (frontend)
4. Open a **Pull Request** against `main`

## Coding Standards

- **Rust**: Follow standard Rust formatting (`cargo fmt`) and add Rustdoc comments to public functions
- **React**: Keep components focused and avoid prop drilling beyond 2 levels
- **CSS**: Add responsive rules for any new layout components (breakpoints: 1024px, 768px, 480px)

## Running the CI Pipeline Locally

The GitHub Actions workflow (`.github/workflows/ci.yml`) can be simulated locally:

```bash
# Contract
cd contract
rustup target add wasm32-unknown-unknown
cargo build --target wasm32-unknown-unknown --release
cargo test

# Frontend
cd ../frontend
npm install
npm run build
```
