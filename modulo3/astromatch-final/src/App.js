import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SwipeScreen from "./pages/swipe-screen/SwipeScreen";
import "./App.css";
import MyMatches from "./pages/my-matches/MyMatches";
import { BASE_URL } from "./constants/base-url";
import { Box, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

function App() {
  const [matches, setMatches] = useState([]);
  const [isMyMatches, setIsMyMatches] = useState(false);
  const [currentPerson, setCurrentPerson] = useState();

  const getCurrentPerson = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/pasche/person`);
      setCurrentPerson(response.data.profile); // OBJECT!!!
    } catch (err) {
      return err.response;
    }
  };

  useEffect(() => {
    getCurrentPerson();
  }, []);

  const postUserMatch = async () => {
    const body = {
      id: currentPerson.id,
      choice: true,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/pasche/choose-person`,
        body
      );
      if (response.data.isMatch) {
        setMatches([...matches, currentPerson]);
        getCurrentPerson();
      } else {
        getCurrentPerson();
      }
    } catch (err) {
      alert("nao deu pai");
    }
  };

  const clearMatches = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/pasche/clear`);
      setMatches([]);
      alert("Matches clear!");
    } catch (err) {
      return err.message;
    }
  };


  const showCorrectPage = () => {
    switch (isMyMatches) {
      case false:
        return (
          <SwipeScreen
            currentPerson={currentPerson}
            getCurrentPerson={getCurrentPerson}
            postUserMatch={postUserMatch}
            changePage={changePage}
          />
        );
      case true:
        return <MyMatches matches={matches} changePage={changePage} />;
    }
  };

  const changePage = () => {
    setIsMyMatches(!isMyMatches);
  };



  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "30vw",
          height: "80vh",
          borderRadius: "25px",
          backgroundColor: "#C4CBCA",
        }}
      >
        {!isMyMatches ? (
          <header className="header">
            <h1 className="title">astromatch</h1>
            <IconButton
              className="button"
              aria-label="change-screen"
              size="large"
              onClick={clearMatches}
            >
              <DeleteSweepIcon fontSize="large" sx={{ color: "#0A0F0D" }} />
            </IconButton>
          </header>
        ) : (
          <header className="headerMatches">
            <IconButton
              aria-label="change-screen"
              size="large"
              onClick={clearMatches}
            >
              <DeleteSweepIcon fontSize="large" sx={{ color: "#0A0F0D" }} />
            </IconButton>
            <h1 className="titleMatches">astromatch</h1>
            <IconButton
              aria-label="change-screen"
              size="large"
              onClick={changePage}
            >
              <PersonIcon fontSize="large" sx={{ color: "#0A0F0D" }} />
            </IconButton>
          </header>
        )}

        {showCorrectPage()}
      </Box>
    </div>
  );
}

export default App;
