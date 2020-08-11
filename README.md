# Front-end frameworks "Rosetta Stone"

This repo demonstrates the same front-end built with React, Angular 10, AngularJS, and Vue

## React:

### PROS:

- ES6/7 syntax
- Easy to build and scale components
- Webpack hot-reload doesn't refresh page

### CONS:

- Complex tooling configuration (webpack, babel)
- Unable to render HTML outside of React
- State management has steep learning curve

---

###### Commands used to create project

```
mkdir mySite
cd mySite
npm init
npm install --save-dev react react-dom webpack webpack-cli webpack-dev-server @babel/core @babel/polyfill @babel/preset-react babel-loader css-loader sass-loader sass mini-css-extract-plugin
```

Note: All other files were created manually though React does have a helper command to generate a new project



## Angular 10:

Aka "Angular 2"

### PROS:

- Dependency Injection
- Two-way data binding
- Built-in unit tests

### CONS:

- Complex project structure
- You have to learn TypeScript
- Hot-reload refreshes entire page

---

###### Commands used to generate the Angular project

```
npm install -g @angular/cli
ng new angular-demo --createApplication=false
cd angular-demo
ng generate application hello-world
cd projects/hello-world/src/app
ng generate component button
```



## AngularJS

Aka "Angular 1"

### Pros

- Vanilla JS!
- Doesn't require build tools
- Dependency Injection

### Cons

- No longer in active development except for bug/security fixes
- Difficult to share state between components
- Difficult to architect large-scale solutions



## VueJS

### Pros

-

### Cons

-