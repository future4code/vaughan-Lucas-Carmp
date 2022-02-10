import React from "react";
import {
  Age,
  AgeText,
  Card,
  Info,
  NameAndAge,
  ProfilePhoto,
} from "./cardStyle";

const PersonCard = (props) => {
  const personData = props.about.map((item) => {
    return (
      <Card>
        <ProfilePhoto src={item.photo} />
        <Info>
          <NameAndAge>
            <h2>{item.name},</h2>

            <Age>
              <AgeText> {item.age}</AgeText>
            </Age>
          </NameAndAge>
          <p>{item.bio}</p>
        </Info>
      </Card>
    );
  });
  return <>{personData}</>;
};
export default PersonCard;
