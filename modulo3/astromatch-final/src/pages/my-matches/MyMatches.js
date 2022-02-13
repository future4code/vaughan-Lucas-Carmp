import { IconButton } from "@mui/material";
import PlaylistAddCheckSharpIcon from "@mui/icons-material/PlaylistAddCheckSharp";
import React from "react";
import {
  MatchCard,
  MatchesBackground,
  MatchName,
  MatchPhoto,
  NoMatches,
  PhotoBorder,
} from "./myMatchesStyle";

const MyMatches = (props) => {
  const matchList = props.matches.map((item) => {
    return (
      <MatchCard>
        <PhotoBorder>
          <MatchPhoto src={item.photo} key={item.id} />
        </PhotoBorder>
        <MatchName key={item.id}>{item.name}</MatchName>
      </MatchCard>
    );
  });
  return(
  <MatchesBackground>
    {props.matches.length === 0
    ? 
    <NoMatches><h1>No matches yet :-(</h1></NoMatches>
    : matchList
  }
    </MatchesBackground>
  )
};
export default MyMatches;
