import { useProtectPage } from "../../App";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {
  AdminScreen,
  DeleteDiv,
  NameAndDelete,
  NameDiv,
  TripCard,
} from "./stylesAdminHome";
import axios from "axios";
import { BASE_URL } from "../../constants/base-url";
import { useEffect } from "react";

const AdminHomePage = (props) => {
  useProtectPage();
  const navigate = useNavigate();

  const openDetails = (id, trip) => {
    props.setTrip(trip);
    navigate(`/admin/trips/${id}`);
  };
  const token = localStorage.getItem("token");
  const deleteTrip = async (id) => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    try {
      const response = await axios.delete(`${BASE_URL}/trips/${id}`, headers);
      window.confirm("Deleting a trip? Really?");
    } catch (err) {
      console.log(err.response);
      alert(
        "Something bad happened. Contact the developers for further information."
      );
    }
  };

  const tripCard = props.trips.map((item) => {
    return (
      <TripCard key={item.id}>
        <NameAndDelete>
          <NameDiv onClick={() => openDetails(item.id, item)}>
            <h3>{item.name}</h3>
          </NameDiv>
          <DeleteDiv>
            <IconButton
              sx={{
                "&:hover": {
                  color: "#eb133a",
                },
              }}
              aria-label="delete"
              size="large"
              onClick={() => deleteTrip(item.id)}
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </DeleteDiv>
        </NameAndDelete>
      </TripCard>
    );
  });

  return (
    <AdminScreen>
      <Button
        variant="contained"
        sx={{
          width: "40%",
          margin: "1vh",
          background: "#EF7A85",
          "&:hover": {
            backgroundColor: "#FF90B3",
            color: "black",
          },
        }}
        endIcon={<AddRoundedIcon />}
        onClick={() => navigate("/admin/trips/create")}
      >
        Create trip
      </Button>
      {tripCard}
    </AdminScreen>
  );
};

export default AdminHomePage;
