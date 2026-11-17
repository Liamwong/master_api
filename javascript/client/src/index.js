// Demo script: calls every endpoint through the API layer and prints the results.
import { listPlayers, createPlayer, getTeams, ApiError } from './api.js';

async function main() {
  console.log('Players:', await listPlayers());

  var created = await createPlayer({ name: 'Victor Wembanyama', team: 'Spurs' });
  console.log('Created:', created);

  created = await createPlayer({ name: 'Kevin Durant', team: 'Houston Rockets' });
  console.log('Created:', created);

  created = await createPlayer({ name: 'Kevin Durant', team: 'Houston Rockets' });
  console.log('Created:', created);


  console.log('Players after create:', await listPlayers());
  console.log('Teams:', await getTeams());

  // Show what an error looks like: missing required field.
  try {
    await createPlayer({ name: 'No Team' });
  } catch (error) {
    if (error instanceof ApiError) {
      console.log(`Expected error (${error.status}):`, error.message);
    } else {
      throw error;
    }
  }
}

main().catch((error) => {
  console.error('Client failed:', error.message);
  process.exit(1);
});
