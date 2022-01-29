import styled from "styled-components";

export const PlaylistCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 20vw;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #d3fff3;
  }
`;
