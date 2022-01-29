import React from "react";
import axios from "axios";
import { PlaylistCard } from "./styled";
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
      return error.response;
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
      const exclusionResponse = await axios.delete(`${BASE_URL}/${id}`, headers);
      this.getPlaylists()
    }catch (error){
      return error.response
    }
  }





  render() {
    const renderedPlaylists = this.state.playlists.map((item) => {
      return (
        <div>
        <PlaylistCard onClick={() => this.props.goToDetails(item.id)} key={item.id}>
          <b>{item.name}</b>
        </PlaylistCard>
        <button onClick={() => this.deletePlaylist(item.id)}>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <h1>Playlists</h1>
        <input value={this.state.playlistName} onChange={this.createPlaylist} />
        <button onClick={this.registerPlaylist}>Create playlist</button>
        <div>
          {renderedPlaylists}
        </div>
        <button onClick={this.props.goToMainScreen}>Main screen</button>
      </div>
    );
  }
}
