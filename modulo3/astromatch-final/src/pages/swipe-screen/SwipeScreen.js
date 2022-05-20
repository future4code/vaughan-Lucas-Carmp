import React from "react";
import PersonCard from "../../components/person-card/PersonCard";
import PlaylistAddCheckSharpIcon from "@mui/icons-material/PlaylistAddCheckSharp";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";
import { IconButton } from "@mui/material";
import { ButtonsContainer } from "./swipeScreenStyle";
const SwipeScreen = (props) => {
  return (
    <div>
      <PersonCard currentPerson={props.currentPerson} />

      <ButtonsContainer>
        <IconButton
          aria-label="dislike"
          size="large"
          onClick={props.getCurrentPerson}
        >
          <AcUnitSharpIcon fontSize="large" sx={{ color: "#5063f2" }} />
        </IconButton>
        <IconButton
          aria-label="change-screen"
          size="large"
          onClick={props.changePage}
        >
          <PlaylistAddCheckSharpIcon
            fontSize="large"
            sx={{ color: "#0A0F0D" }}
          />
        </IconButton>
        <IconButton
          aria-label="like"
          size="large"
          onClick={props.postUserMatch}
        >
          <LocalFireDepartmentSharpIcon
            fontSize="large"
            sx={{ color: "#f55018" }}
          />
        </IconButton>
      </ButtonsContainer>
    </div>
  );
};

export default SwipeScreen;
