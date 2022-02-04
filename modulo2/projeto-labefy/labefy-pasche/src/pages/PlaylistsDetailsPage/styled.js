import styled from "styled-components";

export const DetailsScreenCard = styled.section`
  display: flex;
  font-family: sans-serif;
  font-size: larger;
  flex-direction: column;
  color: #9649cb;
  background-color: #292e1e;
  width: 40vw;
  height: 75vh;
  border-radius: 50px;
  justify-content: space-evenly;
  align-items: center;
`;

export const DetailsTitle = styled.h1`
position: relative;
bottom: 1vh;
`

export const InteractiveSection = styled.div`
height: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

export const InputsSection = styled.section`
    display: flex;
`

export const AddSongInput = styled.input`
width: 10vw;
border: 0px;
border-bottom: 2px solid #AFBBF2;
color: #D3FFF3;
background: transparent;
&::placeholder{
  color: gray
}
`

export const AddArtistInput = styled.input`
width: 10vw;
border: 0px;
border-bottom: 2px solid pink;
color: #D3FFF3;
background: transparent;
&::placeholder{
  color: gray
}
`

export const AddSongButton = styled.button`
border: 0;
border-radius: 5px;
width: 8vw;
transition: all 0.5s ease;
&:hover{
  background-color: lightgreen;
  color: 
}
`





export const SongCard = styled.section`
width: 
display: flex;
flex-direction: column;
justify-content: center;

`

export const SongController = styled.audio`
    height: 50%;
    width: 100%
`

export const MainScreenButton = styled.button`

border: 0;
border-radius: 50px;
background-color: #d3fff3;
width: 30%;
height: 12%;
transition: all 0.5s ease;
&:hover {
  background-color: #7f0799;
  color: #d3fff3;
  border-radius: 5px;
}
`

export const BackButton = styled.button`

border: 0;
border-radius: 50px;
background-color: #d3fff3;
width: 20%;
height: 10%;
transition: all 0.5s ease;
&:hover {
  background-color: #7f0799;
  color: #d3fff3;
  border-radius: 5px;
}
`