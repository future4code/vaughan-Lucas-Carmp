import { useNavigate } from "react-router-dom";
import {
  ButtonsContainer,
  Home,
  HomeImage,
  TextAndButtons,
} from "./stylesHomePage";
import SpaceShip from "../../assets/space-ship.svg";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "#FF90B3",
      color: "white",
    },
  },
});

const HomePage = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Home>
      <HomeImage src={SpaceShip} />
      <TextAndButtons>
        <h2>Tired of Earth? Tons of money with nowhere to spend?</h2>
        <p>
          Then consider applying for an intergalactic trip! If you ever wanted
          to see the red sky of Mars or just wanna get away from everything and
          everyone (specially everyone) we can help you!{" "}
        </p>
        <ButtonsContainer>
          <Button
            sx={{
              background: " #6E44FF",
              "&:hover": { background: "#7F5CFF" },
            }}
            variant="contained"
            endIcon={<RocketLaunchIcon />}
            onClick={() => navigate("/trips/list")}
          >
            Available trips
          </Button>

          <Button
            className={classes.root}
            sx={{ background: "#EF7A85", color: "black" }}
            variant="contained"
            endIcon={
              <AdminPanelSettingsRoundedIcon
                sx={{ color: "black", "&:hover": { color: "white" } }}
              />
            }
            onClick={() => navigate("/login")}
          >
            employee area
          </Button>
        </ButtonsContainer>
      </TextAndButtons>
    </Home>
  );
};

export default HomePage;
