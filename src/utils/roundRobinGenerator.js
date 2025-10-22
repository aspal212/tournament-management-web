export const generateRoundRobinMatches = (participants) => {
  const matches = [];
  const n = participants.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      matches.push({
        id: `match-${i}-${j}`,
        team1: participants[i],
        team2: participants[j],
        status: 'pending'
      });
    }
  }

  return matches;
};
