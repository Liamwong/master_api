// In-memory storage: a Map of player id -> player object.
// Everything here is lost when the server restarts.
export const players = new Map();
export const teams = new Map();

// Seed data so GET /players returns something before POST exists.
players.set('1', { id: '1', name: 'LeBron James', team: 'Philadelphia 76ers' });
players.set('2', { id: '2', name: 'Stephen Curry', team: 'Golden State Warriors' });

// Seed data so GET /team returns something before POST exists.
teams.set('1', { owner: 'Liam', teamName: 'Liam\'s Team', roster: [1, 2]});