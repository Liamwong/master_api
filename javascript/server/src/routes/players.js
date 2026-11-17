import { players } from '../store.js';
import { readRequestBody } from '../utils.js';

// GET /players: return every player as a JSON array.
export function listPlayers(req, res) {
  // A Map isn't JSON-friendly, so convert its values to a plain array first.
  const allPlayers = [...players.values()];

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(allPlayers));
}

export async function postPlayer(req, res) {
  const id = String(players.size + 1); // Generate a new ID based on the current size of the Map.

  try {
    const body = await readRequestBody(req); // Parse the incoming JSON body to ensure it's valid.
    if (!body.name || !body.team) {
      throw new Error('Missing required fields: name and team');
    }
    const newPlayer = {
      id: id,
      name: body.name,
      team: body.team,
    };
    for (const player of players.values()) {
      if (player.name === newPlayer.name && player.team === newPlayer.team){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `player with name ${newPlayer.name} on team ${newPlayer.team} already exists` }));
        return;
      }
    }
    players.set(id, newPlayer);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newPlayer));
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: error.message }));
    return;
  }
}