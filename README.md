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

### Prerequisites
- Docker Desktop v4.11.1 (84025) - ([Download](https://www.docker.com/products/docker-desktop/))

### Running the application in Docker
#### Start the application with:
```bash
yarn up
```

#### Run the initial migrations
_This command can be used to migrate the database at anytime._
```bash
yarn migrate
```
Notes:
- Restarting the application will _not_ run migrations automatically, you must run them manually.
- Migrations will not auto-run on hot reload.

#### Viewing the dev site
Once everything is running you can visit the application at:
- App: http://localhost:3000
- Studio: http://localhost:5555

#### Viewing logs
You can view logs with the following commands:

App logs only:
  ```bash
  yarn logs app
  ```

All logs:
  ```bash
  yarn logs
  ```

#### Connecting to Postgres with your favorite Postgres Client
_Some of these values can be overridden by a `.env` environment variable._
| **Field** | **Value**   | **Overridable via** |
|-----------|-------------|---------------------|
| Host      | `localhost` |                     |
| Port      | `5432`      | `POSTGRES_PORT`     |
| Database  | `myapp`     | `POSTGRES_DATABASE` |
| Username  | `admin`     | `POSTGRES_USERNAME` |
| Password  | `admin`     | `POSTGRES_PASSWORD` |

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

### `classnames` ([NPM](https://npmjs.com/package/classnames)) ([Github](https://github.com/JedWatson/classnames))
This is used to manage the state of class names in React components.

### `formik` ([NPM](https://npmjs.com/package/formik)) ([Github](https://github.com/jaredpalmer/formik)) ([Docs](https://formik.org/docs/overview))
This is used to manage the state of input forms in the application.

### `usehooks-ts` ([NPM](https://npmjs.com/package/usehooks-ts)) ([Github](https://github.com/juliencrn/usehooks-ts)) ([Docs](https://usehooks-ts.com/))
A library of useful React hooks.

### `@headlessui/react` ([NPM](https://npmjs.com/package/@headlessui/react)) ([Github](https://github.com/tailwindlabs/headlessui)) ([Docs](https://headlessui.com/))
A library of useful React components.

## Linting
Run the linter with:
```bash
yarn lint
```

Run the linter and fix all fixable issues:
```bash
yarn lint --fix
```

Print all applied ESLint rules:
```bash
yarn ling:config
```
