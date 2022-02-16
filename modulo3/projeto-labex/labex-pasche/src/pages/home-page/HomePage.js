import { useNavigate } from "react-router-dom";
import {
  ButtonsContainer,
  Home,
  HomeImage,
  TextAndButtons,
} from "./stylesHomePage";
import SpaceShip from '../../assets/space-ship.svg'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Button } from "@mui/material";


const HomePage = (props) => {
  const navigate = useNavigate();
  return (
    <Home>
      <HomeImage  src={SpaceShip} />
      <TextAndButtons>
        <h2>Tired of Earth? Tons of money with nowhere to spend?</h2>
        <p>Then consider applying for an intergalactic trip! If you ever wanted to see the red sky of Mars or just wanna get away from everything and everyone (specially everyone) we can help you! </p>
        <ButtonsContainer>
          <Button variant="contained" endIcon={<RocketLaunchIcon />}onClick={() => navigate("/trips/list")}>Available trips</Button>
          <button onClick={() => navigate("/login")}>employee area</button>
        </ButtonsContainer>
      </TextAndButtons>
    </Home>
  );
};

export default HomePage;
