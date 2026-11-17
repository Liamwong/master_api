import http from 'node:http';
import { listPlayers, postPlayer } from './routes/players.js';
import { getTeams } from './routes/teams.js';
const PORT = process.env.PORT ?? 3000;


// Route table: maps "METHOD /path" to the function that handles it.
// The values are the functions themselves (no parentheses), not the result of calling them.
const routes = {
  'GET /teams':  getTeams,
  'POST /player':  postPlayer,
  'GET /players':   listPlayers,
};

// The single entry point: Node calls this once for every incoming request.
// req = the incoming request (method, url, headers, body).
// res = the response we build and send back.
function handleRequest(req, res) {
    // Build the lookup key, e.g. "GET /health".
    const route = `${req.method} ${req.url}`;
    const handler = routes[route];

    if (handler) {
        // Call the handler we found, passing the request and response along.
        handler(req, res);
    } else {
        // No matching route: reply with 404 Not Found as JSON.
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
}

// Create the server and give it our request handler.
const server = http.createServer(handleRequest);
// Start listening for connections; the callback runs once the server is ready.
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
