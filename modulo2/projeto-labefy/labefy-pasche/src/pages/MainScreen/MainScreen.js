import React from "react";
import { GetStarted, MainScreenCard } from "./styled";

export default class MainScreen extends React.Component {
  render() {
    return (
      <MainScreenCard>
        <h1>Labefy</h1>
        <GetStarted onClick={this.props.goToPlaylists}>Get started</GetStarted>
      </MainScreenCard>
    );
  }
}
