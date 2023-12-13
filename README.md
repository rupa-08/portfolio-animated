# Create a React + Typescript + Tailwind + Vite + Eslint + Husky + Prettier Template

`npm create vite@latest`

## Install Husky and ESLint with TypeScript support

`npm i -D eslint`
`npx eslint --init`
`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
`npm install husky --save-dev`

### Initialize ESLint Configuration

`npx eslint --init`

### Configure Husky to Run ESLint on Pre-Commit

package.json

"scripts": {
"lint": "eslint . --fix",
// other scripts
},
"husky": {
"hooks": {
"pre-commit": "npm run lint"
}
}

.eslintrc.js
module.exports = {
parser: '@typescript-eslint/parser',
plugins: ['@typescript-eslint'],
extends: [
'plugin:@typescript-eslint/recommended',
'react-app',
'prettier/@typescript-eslint',
'plugin:prettier/recommended',
],
rules: {
// Customize rules as needed
},
};

## `npm install --legacy-peer-deps`

npm run lint
npm run dev

npm install --legacy-peers
