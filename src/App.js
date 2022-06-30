import styled from "styled-components";
import Player from "./components/Player/Player.js";
import Button from "./components/Button/Button.js";
import History from "./components/History/History.js";
import { initialPreviousGames } from "./dbHistory.js";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";

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
      <header>
        <h1>Scorekeeper</h1>
      </header>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Game</h2>
                {players.map((player) => {
                  return (
                    <Player
                      key={player.id}
                      name={player.name}
                      score={player.score}
                    />
                  );
                })}
                <Button background={"lightseagreen"}>end game</Button>
              </>
            }
          />
          <Route
            path="/history"
            element={
              <>
                <h2>Previous Games</h2>
                {initialPreviousGames.map((game) => {
                  return <History key={game.id} game={game} />;
                })}
              </>
            }
          />
        </Routes>
      </Main>
      <Navigation />
    </>
  );
}

export default App;

const Main = styled.main`
  display: grid;
  gap: 10px;
`;
