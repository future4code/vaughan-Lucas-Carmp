import React from "react";
import { useEffect, useState } from "react";
import MatchesScreen from "./pages/matches-screen/MatchesScreen";
import Box from "@mui/material/Box";
import { Header, Title } from "./background";
import axios from "axios";
import { BASE_URL } from "./constants/base-url"
import "./App.css";
import MainScreen from "./pages/main-screen/MainScreen";

function App() {
  const [currentPerson, setCurrentPerson] = useState([]);
  const [myMatches, setMyMatches] = useState([]);
  const [page, setPage] = useState('main-screen');

  //block that ensures that the corret screen is being shown
  const currentPage = () => {
    switch (page) {
      case 'my-matches':
        return <MatchesScreen setShownPage={setShownPage()}/>;
      default:
        return (
          <MainScreen
            about={currentPerson}
            getCurrentPerson={getCurrentPerson()}
            triggerGetAndPost={triggerGetAndPost()}
            setShownPage={setShownPage()}
          />
        );
    }
  };

  const setShownPage = () => {
    setPage(!page)
  }


  //GET query that gets the person data to be put in the card
  const getCurrentPerson = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/darvas/person`);
      setCurrentPerson(response.data.profile);
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
    <div className="page">
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
        <Header>
          <Title>astromatch</Title>
        </Header>
  
      </Box>
    </div>
  );
}

export default App;
