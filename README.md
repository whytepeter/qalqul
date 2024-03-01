# Qalqul

[Hosted here](https://qalqul.vercel.app)

## Technologies

- React.js
- Redux
- React Router
- Socket.io
- Tailwind CSS

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js

## How to run locally

1. Clone the repository

```bash
git clone https://github.com/whytepeter/qalqul

cd qalqul
npm install

```

2. Create a `.env` file in `root` directories and add the environment variables as shown below `

```bash
VITE_API_URL=https://jsonplaceholder.typicode.com/users
VITE_SOCKET_URL=https://qulqal-api.onrender.com
```

4. Start the app

```bash
npm run dev
```

If you don't have any server running on port 5173 open [http://localhost:5173](http://localhost:5173) in the browser or check the port assigned to the server in the command line.
