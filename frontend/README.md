# 🧱 Rick Project — Frontend Boilerplate Base

This project is a custom base using React + TypeScript designed to be lightweight, modern, and highly productive from minute one.  
It includes a complete setup with ESLint, Prettier, Barrel Exports, VSCode settings, Sass for global styling, Zustand for state management, and Storybook.

---

## 🚀 Features

- ✅ React + Vite + TypeScript
- 🎯 Simple and familiar architecture
- 🧼 ESLint with best practice rules
- 💅 Prettier for automatic formatting
- 🛆 Barrel Files support
- 💻 Global styles with Sass
- ⚡ VSCode configured for format-on-save
- 📚 Storybook for isolated UI component development
- 🔋 Zustand for lightweight global state management
- 🌐 React Router DOM for routing

---

## 📁 Final Project Structure

```
.
├── README.md
├── bun.lock
├── eslint.config.js
├── estructura.txt
├── generate-component.ts
├── index.html
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── app
│   │   ├── App.scss
│   │   ├── App.tsx
│   │   └── index.ts
│   ├── assets
│   │   └── react.svg
│   ├── constants
│   │   └── index.ts
│   ├── index.scss
│   ├── main.tsx
│   ├── presentation
│   │   ├── components
│   │   │   ├── atoms
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── molecules
│   │   │   │   └── index.ts
│   │   │   └── organisms
│   │   │       └── index.ts
│   │   ├── context
│   │   ├── layouts
│   │   │   └── index.ts
│   │   ├── pages
│   │   ├── routes
│   │   ├── styles
│   │   │   ├── _base.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _reset.scss
│   │   │   ├── _variables.scss
│   │   │   └── index.scss
│   │   └── viewmodels
│   │       └── index.ts
│   ├── services
│   │   └── api
│   │       └── index.ts
│   ├── store
│   │   ├── context
│   │   │   └── index.ts
│   │   └── zustand
│   │       └── index.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── index.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.workspace.ts
```

---

## 🔧 ESLint Configuration

ESLint is configured to work with:

- TypeScript
- React
- Hooks
- Import sorting
- Prettier integration

### 📆 Install Dependencies

```bash
bun add -d eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser \
eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import \
eslint-plugin-prettier eslint-config-prettier
```

### 📄 `eslint.config.js` (ESM format)

```js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    prettier,
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11y,
            import: importPlugin,
            prettier: eslintPluginPrettier,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['warn'],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'import/order': [
                'warn',
                {
                    groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
                    'newlines-between': 'always',
                },
            ],
            'prettier/prettier': 'error',
            'no-console': 'warn',
            'no-unused-vars': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
```

---

## 🎨 Prettier Configuration

### 📄 `.prettierrc`

```json
{
    "tabWidth": 4,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "arrowParens": "always",
    "endOfLine": "auto",
    "printWidth": 100
}
```

### 📄 `.prettierignore`

```
node_modules
dist
build
coverage
*.lock
```

---

## 💼 VSCode Setup

Create `.vscode/settings.json`:

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.detectIndentation": false,
    "[typescript]": {
        "editor.tabSize": 4
    },
    "[typescriptreact]": {
        "editor.tabSize": 4
    },
    "prettier.tabWidth": 4,
    "prettier.useTabs": false
}
```

---

## 📚 Storybook

This project includes **Storybook** preconfigured for documenting and testing components in isolation.

### 🧱 Structure

Stories live alongside components using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles:

```
src/
└── presentation/
    └── components/
        ├── atoms/
        │   ├── Button.tsx
        │   └── Button.stories.tsx
        ├── molecules/
        └── organisms/
```

Storybook config files:

```
.storybook/
├── main.ts        # Main config: stories, plugins, alias
├── preview.ts     # Global styles, decorators, parameters
└── tsconfig.json  # Extends base tsconfig
```

### 🚀 Run Storybook

```bash
bun run storybook
# or
npm run storybook
# or
yarn storybook
```

### 🏗️ Build static version

```bash
bun run build-storybook
```

The static files will be available in the `storybook-static/` folder. Perfect for publishing to GitHub Pages or any CDN.

### 💡 Features

- Alias `@` support for clean imports
- Global styles via `index.scss`
- Ready for addons and visual testing
- Easily extendable with decorators or themes

---

## 🤀 State Management with Zustand

This boilerplate uses [Zustand](https://github.com/pmndrs/zustand) for global state management.

### 📝 Install Zustand

```bash
bun add zustand
```

### 📄 Example Store

```ts
// src/store/zustand/index.ts
import { create } from 'zustand';

interface ExampleState {
    count: number;
    increment: () => void;
}

export const useExampleStore = create<ExampleState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

Then use it inside components like:

```tsx
const count = useExampleStore((state) => state.count);
const increment = useExampleStore((state) => state.increment);
```

---

## 🌐 React Router DOM Setup

React Router DOM is used for client-side routing.

### 📦 Install React Router DOM

```bash
bun add react-router-dom
```

### 📄 Example Usage

```tsx
// src/main.tsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
    <App />
</BrowserRouter>;
```

```tsx
// src/presentation/routes/AppRoutes.tsx
import { BrowserRouter } from 'react-router-dom';
import HomePage from '@/presentation/pages/HomePage';

export const AppRoutes = () => (
    <BrowserRouter>
        <Route path="/" element={<HomePage />} />
    </BrowserRouter>
);
```

---

## 🔀 Available Scripts

```bash
bun run lint        # Run ESLint
bun run lint:fix    # Automatically fix issues
bun run format      # Run Prettier on all files
```

---

## 📦 Alias Configuration in `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
});
```

### Example Usage:

```ts
import { App } from '@/app';
import { Button } from '@/presentation/components/atoms';
```

---

## 📦 `package.json` — Description & Commands

This project comes with a clean and extended `package.json` setup, tailored for productivity with React, TypeScript, Sass, Zustand, Storybook, and routing with React Router DOM.

### 📋 General Info

|     Field | Value  |
| --------: | :----- |
|    `name` | rick   |
| `version` | 0.0.0  |
| `private` | true   |
|    `type` | module |

---

### 🔧 Available Scripts

| Script            | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `dev`             | Starts Vite development server                             |
| `build`           | Compiles TypeScript and creates production build with Vite |
| `preview`         | Previews the production build                              |
| `format`          | Runs Prettier formatting over the project                  |
| `lint`            | Runs ESLint                                                |
| `lint:fix`        | Automatically fixes lint issues                            |
| `storybook`       | Launches Storybook locally                                 |
| `build-storybook` | Generates static Storybook build                           |
| `generate`        | Creates a component + SCSS + Storybook with custom script  |

---

### 📦 Key Dependencies

| Package              | Purpose                     |
| -------------------- | --------------------------- |
| `react`, `react-dom` | Core libraries for React 19 |
| `react-router-dom`   | Declarative routing         |
| `zustand`            | Global state management     |
| `sass`               | SCSS support for styling    |

---

### 🧪 Dev Dependencies Highlights

| Package                | Purpose                                |
| ---------------------- | -------------------------------------- |
| `eslint` + plugins     | Linting with best practices            |
| `prettier`             | Auto formatting                        |
| `typescript` + types   | TypeScript support                     |
| `@vitejs/plugin-react` | React support in Vite                  |
| `storybook` + addons   | Component documentation and playground |
| `vitest`, `playwright` | Testing (unit + e2e)                   |
| `@types/bun`           | Bun runtime types                      |

---

### 🛠️ Install with Bun (recommended)

````bash
bun install

- Or use npm/yarn if you prefer:

npm install
# or
yarn install


---

## 🤮 How to Use This Boilerplate

### ✅ Recommended: GitHub Template

1. Go to the repo on GitHub.
2. Click the green `Use this template` button.
3. Choose a name for your new repository.
4. Clone it to your local machine:

```bash
git clone https://github.com/your-username/new-project.git
cd new-project
bun install # or npm install / yarn install
bun run dev
````

````
cd ~/ruta/del/proyecto-vacio
git init
git remote add origin https://github.com/tu-usuario/tu-repo.git
git pull origin main --allow-unrelated-histories
````

That’s it! You have a fresh, clean project ready to build on.

---

## ⚡ Why Bun instead of npm?

This project uses Bun as the default package manager and runtime. Here's why it's a game-changer for modern frontend workflows:

### ⚡ 1. Ridiculously Fast

    Bun is significantly faster than npm or yarn for both installing packages and running scripts.

    It's built with low-level performance in mind (written in Zig).

📦 Example:

### bun install vs npm install

In many cases, Bun is up to 20x faster.

### 🧼 2. Cleaner and leaner

    Bun doesn't generate a massive node_modules directory.

    No noisy package-lock.json or yarn.lock.

    Installations are deterministic and super fast from the first run.

### 🛠️ 3. Batteries included

Bun isn’t just a package manager — it’s a toolkit:

| Tool          | Replaces...             |
| ------------- | ----------------------- |
| `bun`         | npm, yarn               |
| `bun run`     | npm run                 |
| `bun test`    | jest, vitest (partial)  |
| `bun serve`   | webpack-dev-server, etc |
| `bun install` | npm install             |

Everything works out of the box, no extra setup needed.

### 🤝 4. Fully compatible with npm

    Bun uses the npm registry, so you can install any package like you're used to:

bun add react react-dom

### 🚀 5. Perfect for boilerplates

For a project like Rick Boilerplate, Bun provides:

    Faster setup times

    Better DX (Developer Experience)

    Cleaner scripts

    Less config overhead, more coding

### 🧪 What if you prefer npm or yarn?

No problem. The project isn't Bun-dependent — you can still run:

npm install
npm run dev

Everything will just work.
TL;DR

    Bun is fast, modern, and all-in-one.
    It’s the Ferrari of JavaScript runtimes.
    But if you’re more comfortable with a minivan — npm is still welcome. 🛻

---

## 🤔 Conclusion

With this base:

- You get a familiar, clean structure
- Autoformat and linting out of the box
- Ready to scale and ship fast
- State managed easily with Zustand

---

> This is your new launchpad for all frontend projects. Let’s build! 🚀
