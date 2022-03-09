import React from "react";

import {
  Age,
  AgeText,
  Background,
  Card,
  Info,
  NameAndAge,
  ProfilePhoto,
} from "./personCardStyle";

const PersonCard = (props) => {
  return (
    <Background>
      {props.currentPerson !== undefined ? (
        <Card>
          <ProfilePhoto src={props.currentPerson.photo} />
          <Info>
            <NameAndAge>
              <h2>{props.currentPerson.name},</h2>
              <Age>
                <AgeText>{props.currentPerson.age}</AgeText>
              </Age>
            </NameAndAge>
            <p>{props.currentPerson.bio}</p>
          </Info>
        </Card>
      ) : (
        <h3>Loading...</h3>
      )}
    </Background>
  );
};
export default PersonCard;
