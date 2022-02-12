import { IconButton } from "@mui/material";
import PlaylistAddCheckSharpIcon from "@mui/icons-material/PlaylistAddCheckSharp";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";


import PersonCard from "../../components/person-card/PersonCard";
import { ButtonsContainer } from "./styled";
import React from "react";

const MainScreen = (props) => {
  return (
    <div>
      <PersonCard  />
      <ButtonsContainer>
        <IconButton
          aria-label="dislike"
          size="large"
          onClick={props.getCurrentPerson()}
        >
          <AcUnitSharpIcon fontSize="large" sx={{ color: "#24d3ff" }} />
        </IconButton>
        <IconButton
          aria-label="match-list"
          size="large"
          onClick={props.changeScreen()}
        >
          <PlaylistAddCheckSharpIcon
            fontSize="large"
            sx={{ color: "#0A0F0D" }}
          />
        </IconButton>
        <IconButton aria-label="like" size="large" onClick={props.triggerGetAndPost()}>
          <LocalFireDepartmentSharpIcon
            fontSize="large"
            sx={{ color: "#f55018" }}
          />
        </IconButton>
      </ButtonsContainer>
    </div>
  );
};

export default MainScreen;
