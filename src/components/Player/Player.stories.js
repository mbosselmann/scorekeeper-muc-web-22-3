import Player from "./Player.js";

const examplePlayer = {
  name: "John",
  score: 15,
};

export default {
  title: "Player",
  component: Player,
};

export const Default = () => (
  <Player name={examplePlayer.name} score={examplePlayer.score} />
);
