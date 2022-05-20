import styled from "styled-components";

export const MainScreenCard = styled.section`
  display: flex;
  font-family: sans-serif;
  font-size: larger;
  flex-direction: column;
  color: #9649cb;
  background-color: #292e1e;
  width: 40vw;
  height: 75vh;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const GetStarted = styled.button`
  position: relative;
  top: 5vh;
  border: 0;
  border-radius: 50px;
  background-color: #d3fff3;
  width: 50%;
  height: 10%;
  transition: all 0.5s ease;
  &:hover {
    background-color: #7f0799;
    color: #d3fff3;
    border-radius: 5px;
  }
`;
