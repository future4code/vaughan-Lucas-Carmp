import Box from "@mui/material/Box";
import {Header} from './background'

const MainBackground = (props) => {
  return (
    <Box
      sx={{
        width: "30vw",
        height: "80vh",
        borderRadius: "25px",
        backgroundColor: "#3CBBB1",
      }}
    >
      <Header>
        <h1>astromatch</h1>
      </Header>
    </Box>
  );
};

export default MainBackground;
