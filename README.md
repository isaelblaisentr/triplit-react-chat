
# Triplit Db Chat with React

## Introduction
This project is an exploration into the capabilities of a new open-source database Triplit.

### Why I Started This Project
I decided to start this project for several reasons:

Exploration of New Technology: Triplit is a interesting new technology, and I wanted to dive deep into its features and capabilities. By building a real-world application, I can gain a practical understanding of how Triplit can be leveraged in modern web development.

Experimenting with Material-Tailwind: I have chosen to use Material-Tailwind as the UI framework for this project. This decision is driven by my interest in combining the design aesthetics of Material Design with the flexibility and utility-first approach of Tailwind CSS.

This is not really a chat app, but the schema and the data kinda represents it. Let's see where it gets us!

### Project Goals
- To build a minimalist dashboard layout with Material-Tailwind
- To utilize and showcase the capabilities of Triplit.
- To document and share the schema, relations & queries. 

## Getting Started

- Check out Triplit [Docs](https://www.triplit.dev/docs), visit [triplit.dev/docs](https://www.triplit.dev/docs)
- Check out Material Tailwind [Docs](https://www.material-tailwind.com/docs), visit [material-tailwind.com/docs](https://www.material-tailwind.com/docs)

### Prerequisites

- Node.js
- npm

### Installation
> **Node Version:**
> 21.4.0
```sh
cd client
npm install
```

### Start React Client
```sh
cd client
npm run dev
```

### Start Dev Server from client
> Triplit Db schema is located in: `client/triplit`
```sh
cd client
npx triplit dev
```

### Start Dev Server from server
```sh
cd server
npm start
```

Once the server starts, you should have 2 tokens generated in the console
```sh
anonKey:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....
serviceKey:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....
```

### Database manipulation
If you want a fresh start, run
> `--token` flag is the generated service token

Fully clear the database 
```sh
npx triplit clear --full --token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....
```

Push the actual schema to the database
```sh
npx triplit schema push --token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....
```

Insert data from seed file users-seeds.ts
```sh
npx triplit seed run users-seeds --token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....
```