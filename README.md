# Front-end frameworks "Rosetta Stone"

This project demonstrates the same front-end built with Angular 10, AngularJS, React, and Vue

## Angular 10:

Aka "Angular 2" is really Angular 2+
Angular 1 is referred to as AngularJS

### PROS:
- Dependency Injection
- Two-way data binding
- Built-in unit tests

### CONS:
- Complex project structure
- You have to learn TypeScript
- Hot-reload refreshes entire page for style updates

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

Aka Angular 1

### Pros
- Vanilla JS
- Doesn't require any build tools
- Lower learning curve than Angular 2+
- Dependency Injection

### Cons
- No longer being developed except for bug/security fixes
- Difficult to share state between components
- Difficult to architect large-scale solutions