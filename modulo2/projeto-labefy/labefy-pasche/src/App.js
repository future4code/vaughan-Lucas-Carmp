import React from "react";
import "./App.css";
import Details from "./pages/PlaylistsDetailsPage/Details";
import Playlists from "./pages/PlaylistsListPage/Playlists";
import MainScreen from "./pages/MainScreen/MainScreen";
import { Labefy } from "./styled";



export default class App extends React.Component {
  state = {
    currentPage: "",
    selectedPlaylist: "",
  };

  //identifies and ensures that the correct component is being shown
  showPage = () => {
    switch (this.state.currentPage) {
      case "playlists":
        return (
          <Playlists
            goToDetails={this.goToDetails}
            goToMainScreen={this.goToMainScreen}
          />
        );
      case "playlist-details":
        return (
          <Details
            id={this.state.selectedPlaylist}
            goToMainScreen={this.goToMainScreen}
            goToPlaylists={this.goToPlaylists}
          />
        );
      default:
        return <MainScreen goToPlaylists={this.goToPlaylists} />;
    }
  };

  // goes to the "Playlists" screen. Being called as a prop at MainScreen.js
  goToPlaylists = () => {
    this.setState({ currentPage: "playlists", selectedPlaylist: "" });
  };

  // goes to the "Details" screen. Being called as a prop at Playlists.js
  goToDetails = (id) => {
    this.setState({ currentPage: "playlist-details", selectedPlaylist: id });
  };

  // goes to the "MainScreen" screen. Being called as a prop at Details.js
  goToMainScreen = () => {
    this.setState({ currentPage: "main-screen", selectedPlaylist: "" });
  };

  render() {
    return <Labefy>
      {this.showPage()}
      </Labefy>
  }
}
