# NextJS + NextAuth.js + tRPC + Prisma + Tailwind + Auth0 Boilerplate

## Relevant Technology Documentation
- NextJS - https://nextjs.org/docs
- NextAuth.js - https://next-auth.js.org/getting-started/introduction
- tRPC - https://trpc.io/docs/v9/
- Prisma - https://www.prisma.io/docs/
- Tailwind - https://tailwindcss.com/docs/
- Auth0 - https://auth0.com/docs/

## Project Structure
```
app/
├─ client/              # React Client Files
│  ├─ components        # React Shared Components
│  ├─ contexts          # React Contexts
│  ├─ hooks             # React Hooks
│  ├─ icons             # FontAwesome Icon Management
│  ├─ layouts           # Page Layout Components
│  ├─ lib               # Libraries
│  ├─ modules           # Modules containing components of specific concerns
├─ pages/               # NextJS Pages
├─ prisma/              # Prisma Schema + Migrations
├─ public/              # NextJS Public Folder
├─ server/              # Server Files
│  ├─ controllers/      # tRPC Routers
│  ├─ db/               # DB Files
│  ├─ services/         # Service Files
├─ styles/              # Core CSS Files
├─ docker-compose.yml   # Docker Compose for Development
├─ .env.example         # Example .env File
├─ .gitignore           # Git Ignore
├─ next.config.js       # NextJS Configuration
├─ postcss.config.js    # PostCSS Configuration
├─ .eslintrc            # ESLint
├─ package.json         # Node Package JSON
├─ tsconfig.json        # Typescript Configuration
├─ config.ts            # Application Config (Env Vars)
├─ next-env.d.ts        # NextJS TS File
├─ react.d.ts           # React Global TS Types
├─ .npmrc               # NPM RC for Private Packages
```

## Getting Started

When you first start up, migrations will run to seed the database.
```bash
yarn up
```
Note: Migrations will not auto-run on hot reload.

Once everything is running you can visit the application at:
- App: http://localhost:3000
- Studio: http://localhost:5555

You can view logs with the following commands:
- App logs only:
  ```bash
  yarn logs app
  ```
- All logs:
  ```bash
  yarn logs
  ```
  
Other useful commands:
_Omitting `container_name` will run the command on all containers._
```bash
yarn restart {container_name}
```

```bash
yarn stop {container_name}
```

## Docker Containers
- **app** - NextJS Application
  - Port `3000` - Application
  - Port `9229` - Debugger
- **studio** - Prisma Studio
  - Port `5555` - Studio
- **postgres** - PostgreSQL DB
  - Port `5432` - DB

## Notable Packages Pre-installed

### `classnames`
This is used to manage the state of class names in React components

### `formik`
This is used to manage the state of input forms in the application.

### `usehooks-ts`
A library of useful React hooks.

### `@headlessui/react`
A library of useful React components.
