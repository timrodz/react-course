# The Complete React Web Developer Course

## Environment

### Packages

-   [Node.js](https://nodejs.org/en/download/)
-   [Yarn](https://yarnpkg.com/en/)
-   [Babel](https://babeljs.io)

Checking versions:

-   Node: `node -v`
-   npm: `npm -v`
-   Yarn: `yarn --version`
-   Babel: `babel --help`

### Setup

#### Global

1. Install Node.js
2. Install yarn: `npm install -g yarn`
3. Install live-server: `yarn global add live-server`
    1. If yarn fails to install global packages, use npm: `npm install -g live-server`
4. Install Babel CLI: `yarn global add babel-cli@6.24.1`
    1. If yarn fails to install global packages, use npm: `npm install -g babel-cli@6.24.1`

#### Project Specific

1. Run Babel CLI: `babel`
2. Initialize project: `yarn init` - This will take you through a series of prompts. Generates a file named `package.json`.
3. Add Babel react presets: `yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2`
4. Specify code source-output path: `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
    1. To ensure this works, head over to `public/scripts/app.js` and check the generated code!
5. Run the server!

**Note**: To reinstall the project dependencies: `yarn install`

Run the server: `live-server public`
