# year-template

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Language: Typescript](https://img.shields.io/badge/language-TypeScript-blue.svg?style=flat-square)](https://www.typescriptlang.org)
[![Framework: Astro](https://img.shields.io/badge/framework-Astro-BC52EE?logo=astro&logoColor=fff?style=flat-square)](https://astro.build)
[![CSS: TailwindCSS](https://img.shields.io/badge/css-TailwindCSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white?style=flat-square)](https://tailwindcss.com)
![Deploy Status](https://github.com/ChristineTham/christinetham.github.io/actions/workflows/deploy.yml/badge.svg)

Template for storing a year of blog posts in my personal blog/web site [christham.net](https://christham.net) which is on [christinetham.github.io](https://github.com/ChristineTham/christinetham.github.io).

Each blog year is stored as a separate repository on Github, with the repository name in the format `xxxx` where `xxxx` is the year of the blog posts. The repository is based on this template. Blog posts are written in Markdown and MDX and stored in the `src/blog` directory with the following filename format `yyyy-mm-dd-title.md` where `yyyy` is the year, `mm` is the month and `dd` is the day of the post.

Each blog year is hosted on [Github Pages](https://pages.github.com) and deployed via Github Action workflow. A json file called `blog.json` is generated and stored in the `dist` directory. This file is copied into the main Github repository for the personal web site and used by the main blog site to generate index of all blog articles for searching, categories and tags.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                     |
| :------------------ | :--------------------------------------------------------- |
| `pnpm`              | Installs dependencies                                      |
| `pnpm dev`          | Starts local dev server at `localhost:3000`                |
| `pnpm build`        | Build your production site to `./dist/`                    |
| `pnpm preview`      | Preview your build locally, before deploying               |
| `pnpm format`       | Pretty print the source code                               |
| `pnpm lint`         | Check the source code for errors                           |
| `pnpm copyblog`     | Copy `blog.json` to `../christinetham.github.io/src/blog`  |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro preview`         |
| `pnpm astro --help` | Get help using the Astro CLI                               |
