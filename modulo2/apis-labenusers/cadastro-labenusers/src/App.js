import React from "react";
import "./App.css";
import { UsersList } from "./UsersList";
import { Home } from "./Home";


export default class App extends React.Component {
  state = {
    showingList: false,
  };

  abrirLista = () => {
    this.setState({
      showingList: !this.state.showingList
    })
  }

  render() {
    const telaCerta = () => {
      if (this.state.showingList) {
        return <UsersList />;
      } else {
        return <Home />;
      }
    };
    return (
      <div>
        <div>{telaCerta()}</div>
        <button onClick={this.abrirLista}>Trocar tela</button>
      </div>
    );
  }
}
