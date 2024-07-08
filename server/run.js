import { createServer } from '@triplit/server';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config()

console.log("PROJECT_ID: ", process.env.PROJECT_ID);
console.log("JWT_SECRET: ", process.env.JWT_SECRET);
console.log("LOCAL_DATABASE_URL: ", process.env.LOCAL_DATABASE_URL);

const anonKey = jwt.sign(
    {
        'x-triplit-token-type': 'anon',
        'x-triplit-project-id': process.env.PROJECT_ID,
    },
    process.env.JWT_SECRET
);

const serviceKey = jwt.sign(
    {
        'x-triplit-token-type': 'secret',
        'x-triplit-project-id': process.env.PROJECT_ID,
    },
    process.env.JWT_SECRET
);

console.log("anonKey: ", anonKey)
console.log("serviceKey: ", serviceKey)

const port = +(process.env.PORT || 6543);

const startServer = createServer({
    storage: 'sqlite',
    verboseLogs: true,
});

const dbServer = startServer(port);

console.log('running on port', port);
process.on('SIGINT', function () {
    dbServer.close(() => {
        console.log('Shutting down server... ');
        process.exit();
    });
});