import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  background: black;
`;

export const Card = styled.div`
  width: 75%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ProfilePhoto = styled.img`
  width: 100%;
`;

export const Info = styled.div`
  height: 20%;
  width: 100%;
  position: absolute;
  bottom: 0px;
  color: white;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  padding: 15px;
  z-index: 2;
  font-family: sans-serif;
  background: gray;
  opacity: 0.9;
`;

export const NameAndAge = styled.div`
  display: flex;

  align-items: center;
`;

export const Age = styled.div`
  margin-left: 10px;
`;
export const AgeText = styled.h2`
  font-weight: lighter;
`;
