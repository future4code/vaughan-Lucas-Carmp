import styled from "styled-components";

export const MatchesBackground = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1vh;
`;

export const MatchCard = styled.div`
  display: flex;
  height: 7vh;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: #ee4266;
  }
`;
export const PhotoBorder = styled.div`
  border-radius: 50%;
  position: relative;
  left: 1vw;
  width: 10%;
  height: 90%;
  overflow: hidden;
`;
export const MatchPhoto = styled.img`
  width: 100%;
`;

export const MatchName = styled.ul`
  position: relative;
  left: 2vw;
`;

export const NoMatches = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
