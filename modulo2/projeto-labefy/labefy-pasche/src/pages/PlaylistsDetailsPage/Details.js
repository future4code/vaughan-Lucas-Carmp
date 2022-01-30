import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {
  AddArtistInput,
  AddSongButton,
  AddSongInput,
  BackButton,
  DetailsScreenCard,
  DetailsTitle,
  InputsSection,
  InteractiveSection,
  MainScreenButton,
  SongCard,
  SongController,
} from "./styled";

export default class Details extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
    songsList: [],
  };

  componentDidMount() {
    this.getSongsList(this.props.id);
  }

  componentDidUpdate() {
    this.getSongsList(this.props.id);
  }

  componentWillUnmount() {}

  //controls the 'name' input
  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  //controls the 'artist' input
  handleArtist = (event) => {
    this.setState({ artist: event.target.value });
  };

  //controls the 'url' input
  handleUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  // makes an API POST query which adds a song to the selected playlist
  addSong = async (id) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };
    try {
      const response = await axios.post(`${BASE_URL}/${id}/tracks`, body, {
        headers: { Authorization: "lucas-pasche-moreira" },
      });
      this.setState({
        songsList: response.data,
        name: "",
        artist: "",
        url: "",
      });
    } catch (error) {
      return error.response;
    }
  };

  // makes an API GET query which returns the songs list
  getSongsList = async (id) => {
    const headers = { headers: { Authorization: "lucas-pasche-moreira" } };
    try {
      const getSongsListResponse = await axios.get(
        `${BASE_URL}/${id}/tracks/`,
        headers
      );
      this.setState({ songsList: getSongsListResponse.data.result.tracks });
    } catch (error) {
      alert("Something terrible happened. Refresh the page and try again.");
    }
  };

  render() {
    const renderedSongs = this.state.songsList.map((item) => {
      return (
        <SongCard key={item.id}>
          <p>
            <b>{item.name}</b>, por {item.artist}
          </p>
          <SongController controls="controls">
            <source src={item.url} type="audio/mp3" />
          </SongController>
        </SongCard>
      );
    });
    return (
      <DetailsScreenCard>
        <DetailsTitle>Details</DetailsTitle>
        <InteractiveSection>
          <InputsSection>
            <AddSongInput
              value={this.state.name}
              onChange={this.handleName}
              placeholder="Song"
            />

            <AddArtistInput
              value={this.state.artist}
              onChange={this.handleArtist}
              placeholder="Artist"
            />
            <AddSongInput
              value={this.state.url}
              onChange={this.handleUrl}
              placeholder="Song url"
            />
            <AddSongButton onClick={() => this.addSong(this.props.id)}>
              Add song
            </AddSongButton>
          </InputsSection>
          {renderedSongs}
          <MainScreenButton onClick={this.props.goToMainScreen}>Main screen</MainScreenButton>
          <BackButton onClick={this.props.goToPlaylists}>Back</BackButton>
        </InteractiveSection>
        
      </DetailsScreenCard>
    );
  }
}
