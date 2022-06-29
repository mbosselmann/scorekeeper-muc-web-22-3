import styled from "styled-components";
import Player from "./components/Player/Player.js";
import Button from "./components/Button/Button.js";
import History from "./components/History/History.js";
import { initialPreviousGames } from "./dbHistory.js";

const players = [
  {
    id: "fjghtueodn12234",
    name: "Paul",
    score: 15,
  },
  {
    id: "lfkghgrurncsj305967",
    name: "Julia",
    score: 20,
  },
  {
    id: "05968gjfhrhfn",
    name: "Ralf",
    score: 34,
  },
  {
    id: "lgkgj948576",
    name: "Mareike",
    score: 10,
  },
];

function App() {
  return (
    <Grid>
      <h1>Scorekeeper</h1>
      <h2>Game</h2>
      {players.map((player) => {
        return (
          <Player key={player.id} name={player.name} score={player.score} />
        );
      })}
      <Button background={"lightseagreen"}>end game</Button>
      <h2>Previous Games</h2>
      {initialPreviousGames.map((game) => {
        return <History key={game.id} game={game} />;
      })}
    </Grid>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
  gap: 10px;
`;
