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
├─ react.d.ts           # React Global TS Types. No more importing FC and added an FCC for children.
├─ .npmrc               # NPM RC for Private Packages
```

## Getting Started

### Prerequisites
- Docker Desktop v4.11.1 (84025) - ([Download](https://www.docker.com/products/docker-desktop/))

### Running the application in Docker
#### 1. Create your `.env` file with the required values:
See [Auth0 Setup Section](#auth0-setup) to set-up your Auth0 account properly and retrieve these values.

#### 2. Start the application with:
```bash
yarn up
```

#### 3. Run the initial migrations
_This command can be used to migrate the database at anytime._
```bash
yarn migrate
```
Notes:
- Restarting the application will _not_ run migrations automatically, you must run them manually.
- Migrations will not auto-run on hot reload.

#### 4. Viewing the dev site
Once everything is running you can visit the application at:
- App: http://localhost:3000
- Studio: http://localhost:5555

#### 5. Viewing logs
You can view logs with the following commands:

App logs only:
  ```bash
  yarn logs app
  ```
_`app` can be replaced with any of the other Docker container name._

All logs:
  ```bash
  yarn logs
  ```

### Useful Info

#### Connecting to Postgres with your favorite Postgres Client
Only useful if you don't want to use the already provided Prisma Studio container.  
_Some of these values can be overridden by a `.env` environment variable._
| **Field** | **Value**   | **Overridable Via** |
|-----------|-------------|---------------------|
| Host      | `localhost` |                     |
| Port      | `5432`      | `POSTGRES_PORT`     |
| Database  | `myapp`     | `POSTGRES_DATABASE` |
| Username  | `admin`     | `POSTGRES_USERNAME` |
| Password  | `admin`     | `POSTGRES_PASSWORD` |

#### Other useful commands
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

### `@fortawesome/react-fontawesome` ([NPM](https://www.npmjs.com/package/@fortawesome/react-fontawesome)) ([Github](https://github.com/FortAwesome/react-fontawesome)) ([Icons](https://fontawesome.com/icons)) ([Docs](https://fontawesome.com/v5/docs/web/use-with/react))
This is the package to use FontAwesome with React.

### `classnames` ([NPM](https://npmjs.com/package/classnames)) ([Github](https://github.com/JedWatson/classnames))
This is used to manage the state of class names in React components.

#### Example use:
```tsx
import classnames from 'classnames'

const MyComponent: FCC<Props> = (props) => {
  const classList = classnames([
    'flex', 'justify-center', 'items-center', 'appearance-none',
    'select-none', 'w-full', 'p-2', 'tap-highlight-none',
    // Text
    'font-medium', 'text-black',
    // Focus
    'focus:outline-none', 'focus:ring',
    // Ring
    'ring',
    // Disabled
    'disabled:bg-gray-300', 'disabled:ring-gray-300', 'disabled:cursor-not-allowed', 'disabled:text-gray-400',
    // Scale on click
    'scale-on-click',
    'rounded-sm',
  ], {
    'h-10': !props.small,
    'h-8 md:h-6': props.small,
  }, {
    // Primary
    'bg-amber-300': props.color === 'primary',
    'ring-amber-300': props.color === 'primary',
    'hover:bg-amber-400': props.color === 'primary',
    'hover:ring-amber-400': props.color === 'primary',
  }, props.className)
  
  return (
    <button className={classList}>My Button</button>
  )
}

MyComponent.defaultProps = {
  small: false,
  color: 'primary',
}

type Props = {
  small?: boolean
  color?: 'primary' | 'secondary'
}

export default MyComponent
```

### `formik` ([NPM](https://npmjs.com/package/formik)) ([Github](https://github.com/jaredpalmer/formik)) ([Docs](https://formik.org/docs/overview))
This is used to manage the state of input forms in the application. Formik uses `joi`.

### `joi` ([NPM](https://www.npmjs.com/package/joi)) ([Github](https://github.com/hapijs/joi)) ([Docs](https://joi.dev/api/))
This is used as validation for `formik`.

### `zod` ([NPM](https://www.npmjs.com/package/zod)) ([Github](https://github.com/colinhacks/zod)) ([Docs](https://zod.dev/))
This is used as validation for tRPC. _Yea... two validation libraries... Will replace `joi` when we find a good forms library that supports `zod` natively._

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

## NPM Scripts
| **Script**       | **Description**                                                                                                                                                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `up`             | Starts the Docker project using Docker Compose.<br>Docs: https://docs.docker.com/engine/reference/commandline/compose_up/                                                                                                                    |
| `logs`           | Logs the Docker containers in the project using Docker Compose.<br>Docs: https://docs.docker.com/engine/reference/commandline/compose_logs/                                                                                                  |
| `stop`           | Stops one or more Docker containers.<br>Docs: https://docs.docker.com/engine/reference/commandline/compose_stop/                                                                                                                             |
| `restart`        | Restarts one or more Docker containers.<br>Docs: https://docs.docker.com/engine/reference/commandline/compose_restart/                                                                                                                       |
| `dev`            | Next.js command to start the development server. _You should never need to use this. It is used by the Docker environment to start the application._<br>Docs: https://nextjs.org/docs/api-reference/cli#development                          |
| `build`          | Next.js command to build the project. _You should never need to use this in development. This is used to generate the production build of the application._<br>Docs: https://nextjs.org/docs/api-reference/cli#build                         |
| `start`          | Next.js command to start the project in production mode. _You should never need to use this in development._<br>Docs: https://nextjs.org/docs/api-reference/cli#production                                                                   |
| `lint`           | Runs ESLint for the project.<br>Docs: https://eslint.org/docs/latest/user-guide/command-line-interface                                                                                                                                       |
| `lint:config`    | Shortcut to output all composed ESLint rules. Usually used with `grep` to find if an extension implements a rule already.<br>Docs: https://eslint.org/docs/latest/user-guide/command-line-interface#-c---config                              |
| `prisma`         | Shortcut to the Prisma CLI.<br>Docs: https://www.prisma.io/docs/reference/api-reference/command-reference                                                                                                                                    |
| `studio`         | Shortcut to run the Prisma Studio. _You should never need to run this locally. It is used by the Docker environment to start the studio container._<br>Docs: https://www.prisma.io/docs/reference/api-reference/command-reference#studio     |
| `generate`       | Shortcut to generate the Prisma SDK used as the DB Layer of the application. _This is automatically ran after any `migrate` command is ran locally._<br>Docs: https://www.prisma.io/docs/reference/api-reference/command-reference#generate  |
| `migrate`        | Shortcut to migrate the application's database during development. This command will also run `generate` to generate the appropriate Prisma SDK.  <br>Docs: https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-dev |
| `migrate:prod`   | Shortcut to migrate the application's database during CI/CD deployment. _This command should never be used during development._<br>Docs: https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-deploy                 |
| `docker:dev`     | Script used by the Docker environment to run the application in development mode. _This command should never need to be manually used._                                                                                                      |
| `docker:migrate` | Script used by the Docker environment to run migrations from within the container. _This command should never need to be manually used. Use the `migrate` command._                                                                          |

## Auth0 Setup
- Create an Auth0 Account -> https://auth0.com/signup
- Under **Applications -> Applications** select the **Default App**. _Feel free to rename this later._
- In `.env` set `AUTH0_ISSUER` to the **Domain** with `https://` prefixed.
- In `.env` set `AUTH0_CLIENT_ID` to the **Client ID**.
- In `.env` set `AUTH0_CLIENT_SECRET` to the **Client Secret**.
- Update the **Application Type** to `Regular Web Application`.
- Update the **Allowed Callback URLs** to:
  ```
  http://localhost:3000/api/auth/callback/auth0
  ```
- Click **Save Changes** at the bottom.
