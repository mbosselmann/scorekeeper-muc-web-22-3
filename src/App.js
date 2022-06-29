import Player from "./components/Player/Player.js";
import Button from "./components/Button/Button.js";

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
    <>
      <h1>Scorekeeper</h1>
      {players.map((player) => {
        return (
          <Player key={player.id} name={player.name} score={player.score} />
        );
      })}
      <Button background={"lightseagreen"}>end game</Button>
    </>
  );
}

export default App;
