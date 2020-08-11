# Front-end frameworks "Rosetta Stone"

This repo demonstrates the same front-end built with React, Angular, and Vue



## React:

### PROS:

- ES6/7 syntax
- Easy to build and scale components
- Lots of ways to use (Next.js, Gatsby, React Native)

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
- Complex tooling configuration
- You have to learn TypeScript

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

VueJS is similar to AngularJS and was created by an ex-Google employee from the AngularJS team!

### Pros

- Lowest learning curve
- inline-template allows server to render HTML
- Flexible

### Cons

- State management on large scale projects can get tricky (may need Vuex)
- Debugging errors in templates is difficult

---

###### Commands used to generate the Vue project

```
npm install -g @vue/cli
vue create hello-world
npm install -D sass-loader sass
```