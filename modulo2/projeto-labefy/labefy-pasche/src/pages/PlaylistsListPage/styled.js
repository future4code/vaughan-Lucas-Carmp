import styled from "styled-components";

export const PlaylistCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 20vw;
  text-align: center;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: #d3fff3;
    color: #292e1e;
  }
`;

export const PlaylistScreenCard = styled.section`
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

export const CardTitle = styled.h1`
position: relative;
bottom: 10vh;
`

export const InputCard = styled.div`
display: flex;
height: 5vh;
width: 21vw;
justify-content: space-around;
`

export const CreatePlaylistButton = styled.button`
border: 0;
border-radius: 5px;
width: 10vw;
transition: all 0.5s ease;
&:hover{
  background-color: lightgreen;
  color: 
}
`
export const PlaylistInput = styled.input`
border: 0px;
border-bottom: 2px solid #AFBBF2;
color: #D3FFF3;
background: transparent;
&::placeholder{
  color: gray
}
`

export const EachPlaylist = styled.section`
display: flex;
align-items: center
`

export const DeleteButton = styled.button`
border: 0;
  border-radius: 50px;
  background-color: #d3fff3;
  width: 25%;
  height: 5vh;
  transition: all 0.5s ease;
  &:hover {
    background-color: red;
    color: #d3fff3;
    border-radius: 5px;
  }
`

export const MainScreentButton = styled.button`
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
`
