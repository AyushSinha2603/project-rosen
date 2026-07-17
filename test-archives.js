const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'test' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function run() {
  const archivesRes = await get('https://api.chess.com/pub/player/mosalah1024/games/archives');
  const archives = JSON.parse(archivesRes.data).archives;
  console.log(`Found ${archives.length} archives`);
  for (const url of archives) {
    const res = await get(url);
    if (res.statusCode !== 200) {
      console.log(`ERROR ${res.statusCode} on ${url}`);
    }
  }
  console.log('Done testing archives');
}

run();
