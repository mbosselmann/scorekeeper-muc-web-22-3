import styled from "styled-components";

export default function Player({ name, score }) {
  return (
    <PlayerWrapper>
      {name}
      <PlayerScore>
        <Button type="button" aria-label="Decrease score">
          -
        </Button>
        <span>{score}</span>
        <Button type="button" aria-label="Increase score">
          +
        </Button>
      </PlayerScore>
    </PlayerWrapper>
  );
}

const PlayerWrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 5px 10px 6px;
  border: none;
  border-radius: 5px;
`;

const PlayerScore = styled.div`
  display: grid;
  place-items: center;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
