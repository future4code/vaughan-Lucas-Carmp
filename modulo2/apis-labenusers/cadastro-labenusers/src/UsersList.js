import React from "react";
import axios from "axios";
import "./App.css";

export class UsersList extends React.Component {
  state = {
    users: [],
  };
  componentDidMount = () => {
    this.puxaLista()
  };

  puxaLista = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {Authorization: "lucas-pasche-moreira"}
        }
      )
      .then((response) => {
        this.setState({
          users: response.data,
        });
 
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  deletaUsuario = (id) => {
      axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {Authorization: "lucas-pasche-moreira"},
          }
      )
      .then((response) => {
          alert('Usuário excluído.')
        this.puxaLista()
      }).catch((error) => {
        alert('Ocorreu um erro. tente novamente..')
      })
  }
  
  
  render() {
    const readyToJsx = this.state.users.map((user) => {
      return <div className="container-nome-botao">
                <li key={user.id}>{user.name}</li>
                <button onClick={() => this.deletaUsuario(user.id)}>Deletar</button>
            </div>;
    });
    return( 
    <div>
        {readyToJsx}
        
    </div>
    )
  }
}
