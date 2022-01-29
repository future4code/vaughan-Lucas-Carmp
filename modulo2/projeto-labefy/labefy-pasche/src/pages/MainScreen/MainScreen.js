import React from "react";
import styled from './styled'




export default class MainScreen extends React.Component{
  render(){
    return(
      <div>
        <h1>Main screen</h1>
        <button onClick={this.props.goToPlaylists}>Get started</button>
      </div>
    )
  }
}