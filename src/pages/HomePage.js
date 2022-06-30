import Player from "../components/Player/Player.js";
import Button from "../components/Button/Button.js";

export default function HomePage({ players }) {
  return (
    <>
      <h2>Game</h2>
      {players.map((player) => {
        return (
          <Player key={player.id} name={player.name} score={player.score} />
        );
      })}
      <Button background={"lightseagreen"}>end game</Button>
    </>
  );
}
