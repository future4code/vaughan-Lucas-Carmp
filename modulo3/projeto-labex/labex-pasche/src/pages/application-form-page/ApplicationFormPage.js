import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../../constants/base-url";
import { ApplicationScreen, Form } from "./stylesApplicationForm";

const ApplicationFormPage = (props) => {
  const [selectedTripId, setSelectedTripId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerAge, setCustomerAge] = useState("");
  const [customerOccupation, setCustomerOccupation] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [applicationLetter, setApplicationLetter] = useState("");

  const onChangeTripId = (event) => {
    setSelectedTripId(event.target.value);
  };

  const onChangeName = (event) => {
    setCustomerName(event.target.value);
  };

  const onChangeAge = (event) => {
    setCustomerAge(event.target.value);
  };

  const onChangeOccupation = (event) => {
    setCustomerOccupation(event.target.value);
  };

  const onChangeCountry = (event) => {
    setCustomerCountry(event.target.value);
  };

  const onChangeLetter = (event) => {
    setApplicationLetter(event.target.value);
  };

  const postApplication = async (id) => {
    const body = {
      name: customerName,
      age: customerAge,
      applicationText: applicationLetter,
      profession: customerOccupation,
      country: customerCountry,
    };
    try {
      const response = await axios.post(`${BASE_URL}/trips/${id}/apply`, body);
      setSelectedTripId("");
      setCustomerName("");
      setCustomerAge("");
      setCustomerOccupation("");
      setCustomerCountry("");
      setApplicationLetter("");
      alert("Success!");
    } catch (err) {
      alert(
        "Something bad happened. Contact the developers for further information."
      );
    }
  };

  const selectTrips = props.trips.map((item) => {
    return (
      <MenuItem key={item.id} value={item.id}>
        {item.name}
      </MenuItem>
    );
  });
  return (
    <ApplicationScreen>
      <Form>
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label">
            Choose a trip
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Trips"
            onChange={onChangeTripId}
            value={selectTrips ? selectedTripId : null}
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {selectTrips}
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          onChange={onChangeName}
          value={customerName}
          required
        />
        <TextField
          type="number"
          id="standard-basic"
          label="Age"
          variant="standard"
          onChange={onChangeAge}
          value={customerAge}
          required
        />
        <TextField
          id="standard-basic"
          label="Occupation"
          variant="standard"
          onChange={onChangeOccupation}
          value={customerOccupation}
          required
        />
        <TextField
          id="standard-basic"
          label="Country"
          variant="standard"
          onChange={onChangeCountry}
          value={customerCountry}
          required
        />
        <TextField
          id="outlined-multiline-static"
          label="Application letter"
          onChange={onChangeLetter}
          value={applicationLetter}
          multiline
          rows={4}
          required
        />
        <Button
          variant="contained"
          sx={{
            background: "#EF7A85",
            "&:hover": {
              backgroundColor: "#FF90B3",
              color: "black",
            },
          }}
          onClick={() => postApplication(selectedTripId)}
        >
          Apply
        </Button>
      </Form>
    </ApplicationScreen>
  );
};
export default ApplicationFormPage;
