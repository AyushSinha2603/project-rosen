const { games, player } = require('chess-fetcher');

async function test() {
  try {
    const p = await player('https://www.chess.com/member/mosalah1024');
    console.log('Player fetched:', p.username);
    
    await games('https://www.chess.com/member/mosalah1024', (game) => {
      // do nothing
    }, {
      pgnInJson: true,
      clocks: true
    });
    console.log('Games fetched successfully');
  } catch (e) {
    console.error('Error:', e);
  }
}
test();
