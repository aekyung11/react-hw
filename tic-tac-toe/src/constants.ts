export const PLAYER = { ONE: "🏐", TWO: "🐲" };

export const PLAYER_COUNT = Object.keys(PLAYER).length;

export const INITIAL_SQUARES = Array(9).fill(null);

export const WINNERS_COLOR = "#FFDAB9";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(squares: string | null[]) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}
