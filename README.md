# Dav Lasry project


## Directory Layout

```bash
.
├── /build/                     # The compiled output (via Babel)
├── /config/                    # Configuration files (for Docker containers etc.)
├── /locales/                   # Localization resources (i18n)
├── /migrations/                # Database schema migrations
├── /seeds/                     # Scripts with reference/sample data
├── /src/                       # Node.js application source files
│   ├── /emails/                # Handlebar templates for sending transactional email
│   ├── /models/                # Data access models, e.g. User.create({ email })
│   ├── /routes/                # Express routes, e.g. /login/facebook
│   ├── /types/                 # GraphQL types with resolve functions
│   │   ├── /Node.js            # Relay's "node" definitions
│   │   ├── /UserType.js        # User account (id, email, etc.)
│   │   ├── /ViewerType.js      # The top-level GraphQL object type
│   │   └── /...                # etc.
│   ├── /app.js                 # Express.js application
│   ├── /db.js                  # Database access and connection pooling (via Knex)
│   ├── /passport.js            # Passport.js authentication strategies
│   ├── /redis.js               # Redis client
│   ├── /schema.js              # GraphQL schema
│   └── /server.js              # Node.js server (entry point)
├── /test/                      # Unit, integration and load tests
├── /tools/                     # Build automation scripts and utilities
├── docker-compose.yml          # Defines Docker services, networks and volumes
├── Dockerfile                  # Commands for building a Docker image for production
├── package.json                # The list of project dependencies
└── yarn.lock                   # Fixed versions of all the dependencies
```


## Getting Started

Make sure that you have [Docker][docker] v17 or newer installed plus a good text editor or IDE
([VS Code][code], [WebStorm][wstorm] or another), clone the repo and launch the app with [Docker
Compose][compose]:

```bash
git clone -o nodejs-api-starter -b master --single-branch \
   https://github.com/kriasoft/nodejs-api-starter.git example-api
cd example-api                  # Change current directory to the newly created one
docker-compose up               # Launch Docker containers with the Node.js API app running inside
```

The API server must become available at [http://localhost:8080/graphql](http://localhost:8080/graphql)
([live demo][demo]).

Once the docker container named `api` is started, the Docker engine executes `node tools/run.js`
command that installs Node.js dependencies, migrates database schema to the latest version,
compiles Node.js app from source files (see [`src`](./src)) and launches it with "live reload"
on port `8080`.

In order to open a new terminal session from inside the `api` Docker container run:

```bash
docker-compose exec api /bin/sh
```

From this shell you can run automation scripts such as `yarn test`, `yarn run db:migrate` etc.
Find the full list of scripts available inside the [`tools`](./tools) folder and
the [`package.json`](./package.json) file.


## Testing

```bash
yarn run lint                   # Find problematic patterns in code
yarn run check                  # Check source code for type errors
yarn run test                   # Run unit tests once
yarn run test:watch             # Run unit tests in watch mode
```


## Debugging

In order to run the app with [V8 inspector][v8debug] enabled, simply set `NODE_DEBUG=true` flag in
the [`docker-compose.yml`](docker-compose.yml) file, restart the app (`docker-compose up`) and
[attach your debugger][vsdebug] to `127.0.0.1:9229` (see [`.vscode/launch.json`](https://gist.github.com/koistya/421ea3e0139225b27f909e98202a34de)
for [VS Code][code] as an example).


## Keeping Up-to-Date

If you keep the original Git history after clonning this repo, you can always fetch and merge
the recent updates back into your project by running:

```bash
git checkout master
git fetch nodejs-api-starter
git merge nodejs-api-starter/master
docker-compose up
```


## Deployment

Customize the deployment script found in `tools/publish.js` if needed. Then whenever you need to
deploy your app to a remote server simply run:

```bash
node tools/publish <host>       # where <host> is the name of your web server (see ~/.ssh/config)
```

Not sure where to deploy your app? [DigitalOcean][do] is a great choice in many cases (get [$10 credit][do])




