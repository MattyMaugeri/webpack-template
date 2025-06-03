# ⚙️ Webpack Template Guide

> This template can be used for projects requiring webpack

## 📁 Folder Structure 

```plaintext
your-project/
├── dist/               # Production build (auto-generated)
├── src/                # Source files
│   ├── index.js        # Main entry point
│   ├── index.html      # HTML template
│   └── ...             # Additional modules, assets, styles
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── package.json
├── LICENSE
└── .gitignore
```

##  🔧 Getting Started

Make sure you have `Node.js` and `npm` installed:

```bs
node -v
npm -v
```

Install dependencies:

```bash
npm install
```

Start Development Server:

```bs
npm start
```

## 🏗️ Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm start`      | Run dev server with hot reload |
| `npm run dev`    | Build for development          |
| `npm run build`  | Build for production           |
| `npm run deploy` | Deploy to GitHub Pages         |



## 🚀 Deployment

This project uses **gh-pages** for deployment.

Run this script to deploy:

```bs
npm run deploy
```

This will:

- Build the project to `dist/`
- Push it to the **gh-pages** branch
- Your live site will be at: https://your-username.github.io/your-repo-name/

## 📜 License
This project is licensed under the MIT License.
