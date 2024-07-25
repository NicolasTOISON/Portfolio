# Nicolas TOISON's portfolio

[![Release](https://github.com/NicolasTOISON/Portfolio/actions/workflows/release.yml/badge.svg)](https://github.com/NicolasTOISON/Portfolio/actions/workflows/release.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e9a4516b-9fc9-4e4f-9620-3bbbf3f3ab5f/deploy-status)](https://app.netlify.com/sites/heroic-mandazi-8bb0fa/deploys)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 🚀 Project Structure

```
├── .github/
│   ├── workflows/
│   │   └── release.yml
│   └── dependadot.yml
├── .husky/
│   ├── commit-msg
│   ├── pre-commit
│   └── prepare-commit-msg
├── public/
│   ├── animations/
│   ├── backgrounds/
│   ├── fonts/
│   ├── icons/
│   ├── illustrations/
│   └── logo/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── consts.ts
│   └── env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── astro.config.mjs
├── CHANGELOG.md
├── commitlint.config.js
├── git-precommit-checks.config.js
├── lint-staged.config.js
├── netlify.toml
├── package-lock.json
├── package.json
├── prettier.config.js
├── README.md
├── release.config.js
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

- [Astro documentation](https://docs.astro.build)
