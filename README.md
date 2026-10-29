# DashRush 🎮

**Your next game starts here.**

DashRush is a browser-based gaming platform featuring seven interactive games across racing, shooting, endless running, flight, billiards, adventure, and train simulation. The platform brings different gameplay experiences together in one place through a unified interface.

Built with React and Vite, DashRush focuses on responsive presentation, interactive gameplay, and a dedicated experience for each game.

**Repository:** [github.com/shadhinnandi/DashRush](https://github.com/shadhinnandi/DashRush)

---

## Table of Contents

- [Overview](#overview)
- [Games](#games)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How the Project Works](#how-the-project-works)
- [Adding or Updating Games](#adding-or-updating-games)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

DashRush is a collection of browser-based games designed to make different styles of gameplay accessible through a single website.

Instead of building a separate website for every game, DashRush organizes multiple games under one platform with shared navigation, reusable interface components, and a consistent visual identity.

The project combines React-based page management with custom JavaScript game logic, rendering systems, and game-specific modules.

### Project Goals

- Bring multiple game genres together in one platform.
- Provide a consistent interface for discovering and launching games.
- Keep game logic organized into maintainable modules.
- Use reusable React components for shared interface elements.
- Make the project straightforward to run, develop, and deploy.
- Create a foundation for adding more games and features in the future.

## Games

DashRush currently includes seven games.

### 1. Last Stand

**Genre:** Shooter

Route: `/games/shooter`

A shooting game built around combat, enemy behavior, and gameplay progression. Its implementation includes dedicated modules for game configuration, world management, artificial intelligence, rendering, and the game engine.

### 2. Eight Ball

**Genre:** Billiards / Pool

Route: `/games/pool`

A pool game built around ball physics, aiming, collisions, and game rules. The implementation separates physics calculations, match management, rules, rendering, and AI-related logic.

### 3. Skyline Run

**Genre:** Endless Runner

Route: `/games/runner`

A running game organized around movement, gameplay updates, world logic, and rendering. The runner has dedicated modules for its game engine and world behavior.

### 4. Ring Pilot

**Genre:** Flight

Route: `/games/flight`

A flight-oriented game with separate modules for the game engine, world behavior, rendering, and React-based game interfaces.

### 5. Apex Rush

**Genre:** Racing

Route: `/games/racer`

A racing game with dedicated modules for track definitions, race management, physics, AI, rendering, and gameplay updates.

### 6. Lost Horizons

**Genre:** Adventure

Route: `/games/adventure`

An adventure game organized into separate modules for the game world, engine, rendering, gameplay logic, and setup or preview interfaces.

### 7. Last Train Home

**Genre:** Train Simulation / Adventure

Route: `/games/train`

A train-themed game with separate modules for the engine, world, rendering, game logic, and setup interface.

> Each game has its own implementation and gameplay modules. Exact controls, objectives, and game rules should be documented alongside the individual game as those details are verified.

---

## Features

### Multi-Game Platform

Access seven games through a single website, with a dedicated route for each experience.

### Modular Game Architecture

Game-specific logic is separated into individual directories. This makes it easier to locate and maintain physics, AI, rendering, world management, and game-state logic.

### Shared Components

Reusable components provide common functionality across the games, reducing unnecessary duplication.

### Centralized Game Registry

The game registry in `src/data/games.js` provides a central place to organize game information used by the platform.

### Responsive Interface

The site uses shared layout and styling systems to support a consistent presentation across different screen sizes. Verify individual gameplay interfaces on your target devices before release.

### Theme Support

The project includes theme-related utilities and a theme toggle component.

### Client-Side Routing

The application organizes its main pages and individual games through React-based routes.

### Custom Visual Identity

DashRush uses its own branding, typography, design tokens, and styling files to establish a consistent gaming-platform identity.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and build tooling |
| JavaScript | Game logic and application behavior |
| HTML5 | Web application structure |
| CSS3 | Layout, styling, animation, and visual presentation |
| npm | Dependency and package management |
| Git | Version control |
| GitHub | Source-code hosting |
| Vercel | Deployment and hosting |

### Additional Implementation Details

- **IBM Plex Sans:** Primary interface typography.
- **IBM Plex Mono:** Monospaced typography.
- **Custom JavaScript modules:** Game engines, rendering, physics, AI, and world management.
- **`vercel.json`:** Vercel deployment configuration.

The project does not require a separate backend to run the frontend locally based on its current frontend-oriented structure. Any future online multiplayer, cloud saves, or account features would require their own appropriate infrastructure.

---

## Project Structure

The main source-code organization is shown below.

```text
DashRush/
├── public/
│   ├── favicon.svg
│   └── theme-init.js
│
├── src/
│   ├── assets/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── games/
│   │   │   ├── adventure/
│   │   │   ├── flight/
│   │   │   ├── pool/
│   │   │   ├── racer/
│   │   │   ├── runner/
│   │   │   ├── shooter/
│   │   │   ├── train/
│   │   │   ├── shared/
│   │   │   ├── GameCard.jsx
│   │   │   ├── gameViews.js
│   │   │   └── games.css
│   │   │
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── data/
│   │   └── games.js
│   │
│   ├── lib/
│   │
│   ├── pages/
│   │   ├── Game.jsx
│   │   ├── Games.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   │
│   ├── styles/
│   │   ├── base.css
│   │   ├── dashrush.css
│   │   ├── fonts.css
│   │   ├── layout.css
│   │   └── tokens.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
├── vite.config.js
└── README.md
```

### Important Directories and Files

| Path | Responsibility |
|---|---|
| `src/App.jsx` | Main application composition and route configuration |
| `src/main.jsx` | Frontend application entry point |
| `src/pages/` | Main pages, game page, and not-found page |
| `src/data/games.js` | Centralized game information |
| `src/components/games/` | Game interfaces and game-specific implementations |
| `src/components/games/shared/` | Shared game components and utility logic |
| `src/components/layout/` | Site header, footer, navigation, and theme interface |
| `src/components/ui/` | Reusable interface components |
| `src/lib/` | Shared application utilities |
| `src/styles/` | Global styles, layout rules, fonts, and design tokens |
| `public/` | Public static assets |
| `package.json` | Dependencies and npm scripts |
| `package-lock.json` | Locked dependency versions |
| `vite.config.js` | Vite configuration |
| `vercel.json` | Vercel deployment configuration |

---

## Getting Started

### Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/)
- npm, included with standard Node.js installations
- [Git](https://git-scm.com/)

Check your installation:

```bash
node --version
npm --version
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/shadhinnandi/DashRush.git
```

### 2. Enter the Project Directory

```bash
cd DashRush
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will display a local URL in your terminal, usually:

```text
http://localhost:5173
```

Open the displayed URL in your browser to explore DashRush.

### 5. Build for Production

```bash
npm run build
```

This generates the production build in the `dist/` directory.

### 6. Preview the Production Build

```bash
npm run preview
```

Use the local URL displayed in your terminal to inspect the production build.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

The available commands are based on the project's npm setup. Check `package.json` if scripts change during development.

---

## How the Project Works

### Application Flow

```text
Browser
   |
   v
React Application
   |
   v
Page and Route Selection
   |
   +------ Home Page
   |
   +------ Games Page
   |
   +------ Individual Game Route
   |             |
   |             v
   |       Game Interface
   |             |
   |             v
   |       Game Engine
   |             |
   |             v
   |       Game Logic and Rendering
   |
   +------ Not Found Page
```

### Page Layer

The page components organize the main website views:

- `Home.jsx` presents the landing page.
- `Games.jsx` presents the games listing.
- `Game.jsx` handles individual game pages.
- `NotFound.jsx` handles unmatched routes.

### Game Layer

Each game has its own directory under `src/components/games/`. Depending on the game, its modules handle engine updates, world behavior, rendering, physics, AI, rules, or match progression.

### Shared Game Utilities

The `shared/` directory contains reusable game-related components and utilities. These help maintain consistent behavior and avoid duplicating common logic.

### Styling Layer

The stylesheets separate global foundations, typography, layout, design tokens, and DashRush-specific visual styling.

---

## Adding or Updating Games

DashRush is organized to support future expansion.

A typical workflow for adding a game is:

1. Create a dedicated directory under `src/components/games/`.
2. Implement the game's interface and required game logic.
3. Separate complex functionality into suitable modules, such as an engine, renderer, physics module, or world manager.
4. Register the game in `src/data/games.js`.
5. Update the relevant game-view or routing configuration if necessary.
6. Ensure the game can be opened through the intended route.
7. Test the game, check the browser console, and verify its production build.

Follow the existing code patterns rather than introducing a separate architecture for every new game.

For existing games, keep related logic in the corresponding game directory and reuse shared utilities where appropriate.

---

## Deployment

DashRush can be deployed as a frontend application using Vercel.

### Deploy Through GitHub

1. Push the latest changes to the `main` branch.
2. Sign in to [Vercel](https://vercel.com/).
3. Import the `shadhinnandi/DashRush` GitHub repository.
4. Configure the project using Vite's standard settings.
5. Set the build command to `npm run build`.
6. Set the output directory to `dist`.
7. Deploy the application.

Review `vercel.json` and the Vercel project settings if routing or build behavior requires adjustment.

### Update the Deployed Website

After connecting the repository, subsequent pushes to the configured production branch can trigger new deployments according to the Vercel project settings.

```bash
git add .
git commit -m "Describe the update"
git push
```

### Important Deployment Checks

Before publishing a release:

- Confirm the production build succeeds.
- Open the homepage and games listing.
- Test all seven game routes directly.
- Verify that refreshing a game URL works correctly.
- Check browser console errors.
- Test gameplay input and rendering.
- Check layout on desktop and mobile.
- Confirm that static assets load correctly.

---

## Future Improvements

Possible future development areas include:

- Additional browser-based games.
- Improved mobile and touch controls.
- Accessibility improvements for keyboard and assistive-technology users.
- More detailed instructions and controls for each game.
- Performance optimization for game loops and rendering.
- Better loading, pause, restart, and game-over experiences.
- Optional player statistics and achievements.
- Persistent scores and progression.
- Online leaderboards or multiplayer features, supported by appropriate backend infrastructure.
- Automated checks for builds, routing, and core gameplay behavior.

These are potential improvements, not claims that the features are already implemented.

---

## Contributing

DashRush is maintained as a personal development project. Suggestions, bug reports, and code improvements are welcome.

For a contribution:

1. Fork the repository.
2. Create a separate branch.
3. Make your changes.
4. Test the affected functionality.
5. Verify the production build.
6. Submit a pull request describing the changes.

Keep changes focused, preserve the existing project organization, and avoid committing generated build output, installed dependencies, credentials, or environment-specific secrets.

---

## License

No explicit open-source license is currently specified in this README.

Until a license is added to the repository, do not assume that the code is available for unrestricted redistribution, modification, or commercial reuse. Add a suitable `LICENSE` file if you intend to publish the project under an open-source license.

---

## Author

**Shadhin Nandi**

- GitHub: [@shadhinnandi](https://github.com/shadhinnandi)
- Portfolio: [shadhinnandi.vercel.app](https://shadhinnandi.vercel.app)
- Project: [DashRush on GitHub](https://github.com/shadhinnandi/DashRush)

---

<p align="center">
  <strong>DashRush</strong><br>
  Your next game starts here.
</p>
