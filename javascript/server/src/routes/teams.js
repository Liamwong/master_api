import {teams} from '../store.js';

export function getTeams(req, res) {
    // A Map isn't JSON-friendly, so convert its values to a plain array first.
    const allTeams = [...teams.values()];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(allTeams));
}