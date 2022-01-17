import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    posts: [
      {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
      },
      {
      nomeUsuario: 'fernandinho',
      fotoUsuario: 'https://image.freepik.com/fotos-gratis/homem-trabalhador-com-sorriso-inspirado-olhando-para-a-tela-de-seu-laptop-generico-enquanto-assiste-a-um-video-online_273609-6593.jpg',
      fotoPost:'https://www.colgate.com.br/content/dam/cp-sites/oral-care/oral-care-center/global/article/what-are-generic-drugs.jpeg'
      },
      {
      nomeUsuario: 'doguinhofeliz',
      fotoUsuario: 'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg',
      fotoPost:'https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_1.jpg'
      }
    ],
      valorInputNomeUsuario: '',
      valorInputFotoUsuario:'',
      valorInputFotoPost: ''
  }
  criaPostagem = () =>{
    const novaPostagem = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    // copiando o array inicial e metendo a nova postagem
    const novoPosts = [...this.state.posts, novaPostagem]
    //igualando o array antigo ao novo
    this.setState({posts: novoPosts})
    //Reseta o valor de "valorInput"
    this.setState({valorInputNomeUsuario: ""});
    this.setState({valorInputFotoUsuario: ""});
    this.setState({valorInputFotoPost: ""});
  }

    //mexendo com o input
    onChangeInputNomeUsuario = (event) => {
      // Essa função é chamada toda vez que algo é digitado
      // no input de nome de usuario
  
      // Define o estado "valorInputNomeUsuario" como o
      // valor atual do input, que vem do event
      this.setState({ valorInputNomeUsuario: event.target.value });
    };
  
    onChangeInputFotoUsuario = (event) => {
      // Essa função é chamada toda vez que algo é digitado
      // no input de imagem do usuario
  
      // Define o estado "valorInputFotoUsuario" como o
      // valor atual do input, que vem do event
      this.setState({ valorInputFotoUsuario: event.target.value });
    };
  
      onChangeInputFotoPost = (event) => {
      // Essa função é chamada toda vez que algo é digitado
      // no input de foto
  
      // Define o estado "valorInputFotoPost" como o
      // valor atual do input, que vem do event
      this.setState({ valorInputFotoPost: event.target.value });
  }
  
  render() {
    //mapeando array de objetos para array de posts
    const listaDePosts = this.state.posts.map((postagem) =>{
      return (<Post
              nomeUsuario={postagem.nomeUsuario}
              fotoUsuario={postagem.fotoUsuario}
              fotoPost={postagem.fotoPost}
            />
      )

    });
    return (
      <MainContainer>
        
          {listaDePosts}

        
          
            <input
              // Mesma lógica do exemplo anterior
              value={this.state.valorInputNomeUsuario}
              // Repare na função que é passada aqui no onChange
              onChange={this.onChangeInputNomeUsuario}
              placeholder={"Nome do usuário"}
            />
            <input
              // Diferente do input acima, a variável de estado aqui é outra
              value={this.state.valorInputFotoUsuario}
              // E a função também é outra
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"Link para foto do usuário"}
            />
            <input
              // Variável de estado da foto do post
              value={this.state.valorInputFotoPost}
              // E a função também é outra
              onChange={this.onChangeInputFotoPost}
              placeholder={"Link para foto do post"}
            
            />
          <button onClick={this.criaPostagem}>Publicar</button>
        
        
      </MainContainer>
    );
  }
}

export default App;
