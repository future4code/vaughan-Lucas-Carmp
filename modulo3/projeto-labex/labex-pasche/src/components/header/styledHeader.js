import styled from "styled-components";

export const Header = styled.header`
  background: #6e44ff;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 15vh;
`;

export const Labe = styled.h1`
  border-radius: 10px;
  width: 15vw;
  font-size: 3.5rem;
  font-family: "Kanit", sans-serif;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    background: #9070ff;
  }
`;

export const X = styled.i`
  font-size: 3rem;
  color: #ff90b3;
  font-family: "Pacifico", cursive;
`;
