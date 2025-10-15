# Astro boilerplate

Created by Alex Nawotka @liminalfun

## First time setup guide

1. Check that the following are installed on your computer:
    - Code editor (e.g. VS Code)
    - npm & Node.js (via command line -- see guide for [linux](https://linuxconfig.org/install-npm-on-linux))
    - git
    - github account (+ linked to your code editor and/or terminal)


2. Setup project folder
    - Use github to clone this repo onto your local device. If you don't have a folder where you keep your websites yet, create one (for example: /sites) and then clone this repo into that folder.
    - Create a new folder for your new website (e.g. /sites/yournewprojectname)
    - Copy & paste the contents of this project's folder into your new folder.
    - Open your new project's folder in your code editor
    - Setup git for the new project (see [guide on datacamp](https://www.datacamp.com/tutorial/git-init) for reference)
    - Initialize and push to new repo on Github


3. Install npm packages for local development
    - Use terminal at the root of your project to run: `npm install`
    - If needed, run `npm audit fix` as well
    - Try running your project with `npm run dev` and check for issues

Now you're ready to get started editing the boilerplate to build your project!


## Customize the boilerplate for your project

1. Update your project name:
    - package.json (update name from 'astro-boilerplate')
    - src/content/page/settings.mdx
    - 



----
Not yet edited
----

## To preview edits
in  terminal from snorri folder, run the command `npm run dev`
this starts the local development environment, using your computer as a local server. any saved changes will be immediately visible at `localhost:4321` from your computer while the local server is running.


## To edit:

- Edit .md files in VS Code or Obsidian on your computer

When you want to push something live to the internet:
- Run `vercel --prod` in terminal at the level of the `/snorri` repo folder
- Commit and push to github (back it up) in VS Code or by running `git commit -a -m "my commit message"`

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│	└── images/
│   		└── Image files live here
├── src/
│	└── components/
│	└── content/
│   	└── blog/
│   		└── Article .md files live here
│   	└── pages/
│   		└── .md files for other pages live here
│   └── layouts
│   └── pages
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).