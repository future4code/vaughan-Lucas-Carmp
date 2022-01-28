import React from "react";
import styled from 'styled-components'
import axios from 'axios'
import Details from "./pages/PlaylistsDetailsPage/Details";
import Playlists from "./pages/PlaylistsListPage/Playlists";
import MainScreen from "./pages/MainScreen/MainScreen";



export default class App extends React.Component{
  state = {
    currentPage: ''
  }

  //identifies and ensures that the correct component is being shown 
  showPage = () => {
    switch (this.state.currentPage){
      case "playlists":
        return <Playlists/>;
      case "playlist-details":
        return <Details/>;
      default:
        return <MainScreen goToPlaylists={this.goToPlaylists}/>
      }
  }

  //goes to the "Playlists" screen. Being called as a prop at MainScreen.js
  goToPlaylists = () => {
    this.setState({currentPage: 'playlists'})
  }

  render(){
    return(
      <div>
        {this.showPage()}
      </div>
    )
  }
}


