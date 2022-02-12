import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/base-url";
import { IconButton } from "@mui/material";
import PlaylistAddCheckSharpIcon from "@mui/icons-material/PlaylistAddCheckSharp";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";

import PersonCard from "../../components/person-card/PersonCard";
import { ButtonsContainer } from "./styledMainScreen";

const MainScreen = (props) => {
  const [currentPerson, setCurrentPerson] = useState([]);
  const [myMatches, setMyMatches] = useState([]);
  //GET query that gets the person data to be put in the card
  const getCurrentPerson = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/darvas/person`);
      setCurrentPerson(response.data.profile);
      console.log(currentPerson);
    } catch (err) {
      return err.response;
    }
  };


  //POST query that sends to the API the cards that the user has liked
  const postUserMatch = async () => {
    const body = {
      id: currentPerson.id,
      choice: true,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/darvas/choose-person`,
        body
      );
      if (response.data.isMatch) {
        setMyMatches([...myMatches, currentPerson]);
        getCurrentPerson();
      } else {
        getCurrentPerson();
      }
    } catch (err) {
      alert("nao deu pai");
    }
  };
  //function that triggers the POST and the GET query at the LIKE click
  const triggerGetAndPost = () => {
    getCurrentPerson();
    postUserMatch();
  };

  useEffect(() => {
    getCurrentPerson();

  }, []);

 
  return (
    <div>
      <PersonCard about={currentPerson} />
      <ButtonsContainer>
        <IconButton
          aria-label="dislike"
          size="large"
          onClick={getCurrentPerson}
        >
          <AcUnitSharpIcon fontSize="large" sx={{ color: "#24d3ff" }} />
        </IconButton>
        <IconButton
          aria-label="match-list"
          size="large"
          onClick={props.goToMyMatches}
        >
          <PlaylistAddCheckSharpIcon
            fontSize="large"
            sx={{ color: "#0A0F0D" }}
          />
        </IconButton>
        <IconButton
          aria-label="like"
          size="large"
          onClick={triggerGetAndPost}
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

export default MainScreen;
