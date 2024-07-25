# TypeScript

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Reasons for Challenge

TypeScript is a very marketable skill for those of you who are job searching. It is a very useful tool that stops you from introducing type related bugs from application.

## Examples and Documentation

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)
- [React events and TypeScript: a complete guide](https://devtrium.com/posts/react-typescript-events)
- TypeScript and React: [Components](https://fettblog.eu/typescript-react/components/) | [Hooks](https://fettblog.eu/typescript-react/hooks/) | [Events](https://fettblog.eu/typescript-react/events/)
- [TutorialsTeacher](https://www.tutorialsteacher.com/typescript)

## Getting Started & Instructions

You will be refactoring two of your previous assignments to use TypeScript.

- exercises/03-props/
- exercises/07-forms/
- exercises/12-use-effect/

One thing to note before we begin is that the tests are going to break. If time permits, you will see an example of automated tests with Typescript and React later on in the course.

To convert these assignments to TypeScript assignment, you will need to navigate to the root of each and then install all React TypeScript dependencies. For example, for the _03-props_, you would do:

```shell
cd exercises/03-props/
code . # if you would like to open this in a separate VSCode window
npm install --save-dev typescript @types/node @types/react @types/react-dom vite-plugin-checker
```

Next, you are going to configure TypeScript by copy the following files below. For example, if you are working on _03-props_:

- Copy _exercises/15-typescript/tsconfig.json_ and paste it into _exercises/03-props/_
- Copy _exercises/15-typescript/tsconfig.node.json_ and paste it into _exercises/03-props/_
- Copy _exercises/15-typescript/src/vite-env.d.ts_ and paste it into _exercises/03-props/src/_
- Delete _exercises/03-props/vite.config.js_. Copy _exercises/15-typescript/vite.config.ts_ and paste it into _exercises/03-props/_
- Delete _exercises/03-props/.eslintrc.cjs_. Copy _exercises/15-typescript/.eslintrc.cjs_ and paste it into _exercises/03-props/_

When this is complete, your file structure should look like this:

```
> src
    - App.jsx
    - main.jsx
    - and any other files ...
    - vite-env.d.ts
- .eslintrc.cjs
- index.html
- package.json
- tsconfig.json
- tsconfig.node.json
- vite.config.ts
- and a few other files ...
```

Rename _src/main.jsx_ file (the entry point) as _src/main.tsx_ and update the _index.html_ file so that loads _/src/main.tsx_:

```html
<!DOCTYPE html>
<html lang="en">
  <!-- ... -->
  <body>
    <div id="root"></div>
    <!-- Update the script tag here: -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Now, start the application with `npm run dev`. If you see this error:

![ ERROR(TypeScript)  Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Container'. Type 'null' is not assignable to type 'Container'.](typescript-main-error.png)

This is because it is possible that `document.getElementById("root")` can be null and TypeScript doesn't like this. You are going to cast `document.getElementById("root")` as an HTML element. Make the following changes inside of _src/main.tsx_:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
// The line below will vary from exercise to exercise
import App from "./components/App/App"; // Remove the extension if there

// Update this line below
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Rename all files that contain React components so that they end with _.tsx_. You may need to restart your application. (Press `ctrl+c` to quit and then `npm run dev` to start.) You will see errors on the screen and in your terminal. Your job is to refactor the code so that it is in TypeScript. For most errors, this means either declaring new types and interfaces or importing and using existing types from React.

In _exercises/07-forms/_, rename _countries.json_ and _states.json_ so that they end in _.ts_. You will need to export the countries and states as named exports. For example:

```ts
// In countries.ts
export const countries = [
  // ...
];

// In App.tsx
import { countries } from "./assets/countries";
```

In _exercises/12-use-effect/_, update _src/App.tsx_ so that the axios response so that it isn't using type `any`. For example, you will need to do something like this:

```ts
// ...

type Quote = // ... complete me

// ...
axios.get<Quote>(
  // ...
)
```

## Acceptance Criteria

- Your application starts without any errors.
- All files with React components to end with the _.tsx_ extension.
- All former JSON files end with the _.ts_ extension.
- All of your code has typed annotations.
- You do not use the `any` type anywhere.
