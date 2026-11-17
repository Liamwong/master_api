// API integration layer: the only file that knows URLs, HTTP methods and JSON.
// The rest of the client calls these functions and never touches fetch directly.

const BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3000';

// Thrown when the server replies with a non-2xx status.
export class ApiError extends Error {
  constructor(status, body) {
    super(body?.error ?? `Request failed with status ${status}`);
    this.status = status;
    this.body = body;
  }
}

// Shared helper: sends a request, parses the JSON reply, and throws on errors.
async function request(method, path, body) {
  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new ApiError(response.status, data);
  }
  return data;
}

// GET /players
export function listPlayers() {
  return request('GET', '/players');
}

// POST /player
export function createPlayer({ name, team }) {
  return request('POST', '/player', { name, team });
}

// GET /teams
export function getTeams() {
  return request('GET', '/teams');
}
