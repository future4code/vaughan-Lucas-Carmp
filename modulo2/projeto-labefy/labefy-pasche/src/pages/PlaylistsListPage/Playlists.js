import React from "react";
import axios from "axios";
import {
  InputCard,
  PlaylistCard,
  PlaylistScreenCard,
  PlaylistInput,
  EachPlaylist,
  DeleteButton,
  CreatePlaylistButton,
  MainScreentButton,
  CardTitle,
} from "./styled";
import { BASE_URL } from "../../constants/urls";

export default class Playlists extends React.Component {
  state = {
    playlistName: "",
    playlists: [],
  };

  componentDidMount() {
    this.getPlaylists();
  }

  componentDidUpdate() {
    this.getPlaylists();
  }

  // create a new playlist
  createPlaylist = (event) => {
    this.setState({ playlistName: event.target.value });
  };

  // makes an API  POST query which registers a playlist
  registerPlaylist = async () => {
    const body = {
      name: this.state.playlistName,
    };
    try {
      const response = await axios.post(BASE_URL, body, {
        headers: { Authorization: "lucas-pasche-moreira" },
      });
      this.setState({ playlistName: "" });
    } catch (error) {
      alert("This playlist already exists. Choose other name.");
    }
  };

  // makes an API GET query which returns the playlists list
  getPlaylists = async () => {
    const headers = { headers: { Authorization: "lucas-pasche-moreira" } };
    try {
      const getPlaylistsResponse = await axios.get(BASE_URL, headers);
      this.setState({ playlists: getPlaylistsResponse.data.result.list });
    } catch (error) {
      return error.response;
    }
  };

  // makes an API DELETE query which deletes the playlists list
  deletePlaylist = async (id) => {
    const headers = { headers: { Authorization: "lucas-pasche-moreira" } };
    try {
      const exclusionResponse = await axios.delete(
        `${BASE_URL}/${id}`,
        headers
      );
    } catch (error) {
      return error.response;
    }
  };

  render() {
    const renderedPlaylists = this.state.playlists.map((item) => {
      return (
        <EachPlaylist>
          <PlaylistCard
            onClick={() => this.props.goToDetails(item.id)}
            key={item.id}
          >
            <b>{item.name}</b>
          </PlaylistCard>
          <DeleteButton onClick={() => this.deletePlaylist(item.id)}>
            Delete
          </DeleteButton>
        </EachPlaylist>
      );
    });

    return (
      <PlaylistScreenCard>
        <CardTitle>Playlists</CardTitle>
        <InputCard>
          <PlaylistInput
            type="text"
            value={this.state.playlistName}
            onChange={this.createPlaylist}
            placeholder="Choose a name"
          />
          <CreatePlaylistButton onClick={this.registerPlaylist}>
            Create playlist
          </CreatePlaylistButton>
        </InputCard>
        <div>{renderedPlaylists}</div>
        <MainScreentButton onClick={this.props.goToMainScreen}>
          Main screen
        </MainScreentButton>
      </PlaylistScreenCard>
    );
  }
}
