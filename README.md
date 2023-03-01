# Angular Server-Side-Render

### Create a new Angular App 
- ng new angular-app-ssr
```text
- Routing (yes)
- CSS (select)

Running test app:
ng serve --open

Navigation to:
http://localhost:4200
```
- ng add @nguniversal/express-engine
- npm run build:ssr
```text
- dist/angular-app-ssr/browser
- dist/angular-app-ssr/server

Running test app via SSR:
npm run server:ssr

Navigation to:
http://localhost:4000
```
