# Fyukon Portfolio

Personal portfolio website for Alexey Lensu — Python/backend developer and automation specialist.

Production site: https://fyukon.pro

## Stack

- React
- Vite
- Tailwind CSS v4
- i18next / react-i18next
- Docker + Nginx
- Caddy reverse proxy in production

## Features

- bilingual RU/EN content;
- responsive portfolio landing page;
- projects, services, experience, tech stack and contact sections;
- clean dark/light business style;
- Docker-ready static build.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static build is written to `dist/`.

## Lint

```bash
npm run lint
```

## Docker

```bash
docker build -t fyukon-portfolio .
docker run -d --name fyukon-portfolio -p 127.0.0.1:8080:80 fyukon-portfolio
```

## Production deployment notes

The production deployment runs on VPS behind Caddy:

- project path on VPS: `/root/fyukon-portfolio` or `/root/portfolio` depending on deployment generation;
- container serves Nginx on local port `8080`;
- Caddy proxies `fyukon.pro` to the container;
- source edits must be rebuilt with `npm run build` before syncing `dist/`.

## Repository policy

Commit source code, configs and docs.

Do not commit:

- `node_modules/`;
- `dist/` unless explicitly needed for static handoff;
- `.env` or secrets;
- temporary local files.
