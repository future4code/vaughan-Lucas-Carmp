import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./App.css";
import { Header, Title } from "./styled-app";
import MainScreen from "./pages/main-screen/MainScreen";
import MyMatches from "./pages/my-matches/MyMatches";

function App() {
  const [page, setPage] = useState('main-screen')
  
  const goToMyMatches = () => {
    setPage('my-matches')
  }

  const goToMainScreen = () => {
    setPage('main-screen')
  }
  
  const currentPage = () => {
    switch (page) {
      case 'main-screen':
        return <MainScreen goToMyMatches={goToMyMatches}/>
      case 'my-matches':
        return <MyMatches goToMainScreen={goToMainScreen}/>
    }
  }





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
        <Header>
          <Title>astromatch</Title>
        </Header>
       {currentPage()}
      </Box>
    </div>
  );
}

export default App;
