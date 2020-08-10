# Front-end frameworks "Rosetta Stone"

This project demonstrates the same front-end built with Angular 10, AngularJS, React, and Vue

## Angular:

Commands used to generate the Angular project

```
npm install -g @angular/cli
ng new angular-demo --createApplication=false
cd angular-demo
ng generate application hello-world
cd projects/hello-world/src/app
ng generate component button
```

PROS:
- Dependency Injection
- Two-way data binding
- Built-in unit tests

CONS:
- Complex project structure
- You have to learn TypeScript
- Hot-reload refreshes entire page for style updates