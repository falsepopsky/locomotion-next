# Locomotion Next

![Locomotion Logo](./public/logo_white.png)

## :information_source: About

Rediseño de la página 'locomotiontv', de forma minimalista, con guia de programación semanal y del día corriente.

> **Note**  
> As of April 15th, 2023, this repository is going to be archived and the site will be shut down as well.

---

### :camera: Pics

![home page of Locomotion Next](./docs/index.png)

### :computer: System Requirements

- Node.js 18.0 or later
- MacOS, Windows (including WSL), and Linux are supported
- pnpm v8

### 🔧 Setup

1. pnpm i --frozen-lockfile
2. Setup [Prisma](docs/prisma.md)
3. copy and paste in [line 5](next.config.js) `script-src 'self' 'unsafe-eval';` to enable usafe-eval in development enviroment.
4. pnpm dev

### :pushpin: Built with

- React + NEXT.JS
- Prisma + CockroachDB
- Tailwind CSS
- luxon
- swr
- etc.

### :scroll: License

[GPL-3.0 License](https://github.com/falsepopsky/locomotion-tv-next/blob/main/LICENSE)

#### :open_file_folder: Folder Structure

```
    .
    ├── vscode
    ├── docs
    ├── prisma
    ├── public
    │   ├── banners
    │   └── ...
    ├── src
    │   ├── components
    │   │   └── ...
    │   ├── pages
    │   │   ├── api
    │   │   └── ...
    │   └── utils
    └── LICENSE
```
