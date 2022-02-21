import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useProtectPage } from "../../App";
import { BASE_URL } from "../../constants/base-url";
import {
  ApprovedCardSection,
  ButtonsContainer,
  Card,
  DetailsScreen,
  ApplicantsLoadingMessage,
  ApplicantCardSection,
  SectionTitle,
  ApprovedLoadingMessage,
} from "./stylesTripDetails";

const TripDetailsPage = (props) => {
  useProtectPage();
  const [applicants, setApplicants] = useState();
  const [approved, setApproved] = useState();
  const token = localStorage.getItem("token");
  
  const getTripDetails = async (id) => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    try {
      const response = await axios.get(`${BASE_URL}/trip/${id}`, headers);
      setApplicants(response.data.trip.candidates);
      setApproved(response.data.trip.approved);
    } catch (err) {
      alert(
        "Something bad happened. Contact the developers for further information."
      );
    }
  };

  const manageApplicants = async (choice, id) => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    const body = {
      approve: choice,
    };
    try {
      const response = await axios.put(
        `${BASE_URL}/trips/${props.thisTrip.id}/candidates/${id}/decide`,
        body,
        headers
      );
    } catch (err) {
      alert(
        "Something bad happened. Contact the developers for further information."
      );
    }
  };

  const mappedApplicants = applicants ? (
    applicants.map((item) => {
      return (
        <Card key={item.id}>
          <p>
            <b>Name:</b> {item.name}
          </p>
          <p>
            <b>Age</b>: {item.age}
          </p>
          <p>
            <b>Occupation:</b> {item.profession}
          </p>
          <p>
            <b>Country</b>: {item.country}
          </p>
          <p>
            <b>Application letter:</b> {item.applicationText}
          </p>
          <br></br>
          <ButtonsContainer>
            <Button
            sx={{
              background: "#eb4542",
              color: "black",
              "&:hover": {
                backgroundColor: "#e66765",
              },
            }}
              variant="contained"
              onClick={() => manageApplicants(false, item.id)}
            >
              Deny
            </Button>
            <Button
            sx={{
              background: "#6cf08f",
              color: "black",
              "&:hover": {
                backgroundColor: "#b3f2c4",
              },
            }}
              variant="contained"
              onClick={() => manageApplicants(true, item.id)}
            >
              Approve
            </Button>
          </ButtonsContainer>
        </Card>
      );
    })
  ) : (
    <ApplicantsLoadingMessage>Loading...</ApplicantsLoadingMessage>
  );

  const mappedApproved = approved ? (
    approved.map((item) => {
      return (
        <Card key={item.id}>
          <p>
            <b>Name:</b> {item.name}
          </p>
        </Card>
      );
    })
  ) : (
    <ApprovedLoadingMessage>Loading...</ApprovedLoadingMessage>
  );

  useEffect(() => {
    getTripDetails(props.thisTrip.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTripDetails(props.thisTrip.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicants, approved]);
  return (
    <DetailsScreen>
      <SectionTitle>
        <h2>Trip: {props.thisTrip.name}</h2>
      </SectionTitle>
      <Card>
        <p>
          <b>Description:</b> {props.thisTrip.description}
        </p>
        <p>
          <b>Planet</b>: {props.thisTrip.planet}
        </p>
        <p>
          <b>Duration</b>: {props.thisTrip.durationInDays}
        </p>
        <p>
          <b>Date:</b> {props.thisTrip.date}
        </p>
      </Card>
      <SectionTitle>
        <h2>Candidates</h2>
      </SectionTitle>
      <ApplicantCardSection>{mappedApplicants}</ApplicantCardSection>
      <SectionTitle>
        <h2>Approved</h2>
      </SectionTitle>
      <ApprovedCardSection>{mappedApproved}</ApprovedCardSection>
    </DetailsScreen>
  );
};
export default TripDetailsPage;
