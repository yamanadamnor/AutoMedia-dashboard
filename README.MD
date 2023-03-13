# AutoMedia Dashboard
[![Create and publish image](https://github.com/yamanadamnor/AutoMedia-dashboard/actions/workflows/container_build.yml/badge.svg?branch=main)](https://github.com/yamanadamnor/AutoMedia-dashboard/actions/workflows/container_build.yml)

The official dashboard for [AutoMedia](https://github.com/yamanadamnor/AutoMedia)

## Dependencies
- node v16+
- npm v8.15+

## Run locally
Copy the `.env` file by running
```bash
cp .env-example .env
```
Begin with installing all of the dependencies
`npm install`
### Run development server
`npm run dev`

### Build and serve
`npm run build` and `npm start`

### Lint code
The lint command lints both CSS files located in `styles/` directory and ts/tsx files

`npm run lint`


## Techstack
- Typescript
- nextjs
- next-auth
- prisma
- tailwindcss
- dnd-toolkit
- framer-motion
- Docker
