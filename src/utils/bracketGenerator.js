export const generateSingleEliminationBracket = (participants) => {
  const sorted = [...participants].sort();
  const matches = [];

  let round = 0;
  let current = sorted;

  while (current.length > 1) {
    const nextRound = [];
    for (let i = 0; i < current.length; i += 2) {
      if (i + 1 < current.length) {
        matches.push({
          id: `match-${round}-${i/2}`,
          round,
          team1: current[i],
          team2: current[i+1],
          winner: null,
          status: 'pending'
        });
        nextRound.push(null);
      } else {
        nextRound.push(current[i]);
      }
    }
    current = nextRound;
    round++;
  }

  return matches;
};
