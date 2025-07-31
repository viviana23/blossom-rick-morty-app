# Rick and Morty Search

A web application built with React that allows you to explore characters from the Rick and Morty series. Includes features like search, favorites, dynamic filters, character details, and alphabetical sorting.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Features
Character listing from the official Rick and Morty API.
Real-time name-based search.
Ability to mark/unmark characters as favorites.
Filters by species and character type (all, favorites, others).
Alphabetical sorting A-Z / Z-A.
Character detail view with dynamic routing.
Responsive design (mobile & desktop).
Clean architecture and separation of concerns following best practices.

## Technologies Used

- React 18 + Vite
- TypeScript
- TailwindCSS v4
- Apollo Client
- GraphQL (public API)
- React Router DOM
- Vite aliases (`@components`, `@api`, etc.)

## Installation

1.  Clone the repository: `git clone https://github.com/viviana23/blossom-rick-morty-app.git`
2.  Navigate to the frontend folder:
    `cd rick-and-morty-search`
    `npm install`

## Usage

1.  Start the development server: `npm run dev`
   The app will open at http://localhost:5173

## Testing

1. Unit Tests:

Run `npm run test `


## Project Structure

src/
│
├── api/                      # GraphQL queries
├── assets/                   # Icons and SVGs
├── components/               # Reusable components
├── features/characters/      # Main feature: characters
│   ├── components/           # UI components (List, Item, Detail, Filters)
│   ├── hooks/                # Custom hooks (filters, favorites)
│   └── types/                # TypeScript types
├── pages/                    # Pages (HomePage)
├── routing/                  # React Router routes
├── styles/                   # Global styles (Tailwind base)
└── main.tsx / App.tsx        # Main app entry points


## Contact
Feel free to reach out via email: rinconviviana22@gmail.com


