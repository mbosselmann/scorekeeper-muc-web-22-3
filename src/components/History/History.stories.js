import History from "./History.js";

const exampleGame = {
  id: "123HFGDB",
  players: [
    {
      id: "0tfnshVJFHs",
      playerName: "John",
      score: 50,
    },
    {
      id: "jfhdkeTNGHSDK7564980",
      playerName: "Jane",
      score: 48,
    },
    {
      id: "jghtLAKTJGM7564839",
      playerName: "Jack",
      score: 30,
    },
  ],
};

export default {
  title: "History",
  component: History,
};

export const Default = () => <History game={exampleGame} />;
