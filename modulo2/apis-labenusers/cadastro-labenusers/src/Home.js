import React from "react";
import axios from 'axios';


export class Home extends React.Component {
    state = {
        nameInput: "",
        emailInput: "",
      };

      cadastraUsuario = () => {
        const body = {
          name: this.state.nameInput,
          email: this.state.emailInput,
        };
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
              headers: { Authorization: "lucas-pasche-moreira" },
            }
          )
          .then((response) => {
            alert("Usuário adicionado!");
            this.setState({
              nameInput: "",
              emailInput: "",
            });
          })
          .catch((error) => {
            alert(
              "Não foi possível cadastrar o usuário. Tente novamente com outros valores."
            );
          });
      };

      onChangeNameInput = (event) => {
        this.setState({
          nameInput: event.target.value,
        });
      };
    
      onChangeEmailInput = (event) => {
        this.setState({
          emailInput: event.target.value,
        });
      };
  render() {
    return (
      <>
        <input
          value={this.state.nameInput}
          onChange={this.onChangeNameInput}
          placeholder="Nome"
        />
        <input
          value={this.state.emailInput}
          onChange={this.onChangeEmailInput}
          placeholder="Email"
        />
        <button onClick={this.cadastraUsuario}>Cadastrar usuário</button>
      </>
    );
  }
}
