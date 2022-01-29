import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default class Details extends React.Component {
  state = {
    details: "",
  };




  render() {
    return (
      <div>
        <h1>Details</h1>
        {this.props.id}
        <button onClick={this.props.goToMainScreen}>Main screen</button>
        <button onClick={this.props.goToPlaylists}>Back</button>
      </div>
    );
  }
}
