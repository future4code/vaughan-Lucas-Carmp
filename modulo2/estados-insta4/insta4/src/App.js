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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'fernandinho'}
          fotoUsuario={'https://image.freepik.com/fotos-gratis/homem-trabalhador-com-sorriso-inspirado-olhando-para-a-tela-de-seu-laptop-generico-enquanto-assiste-a-um-video-online_273609-6593.jpg'}
          fotoPost={'https://www.colgate.com.br/content/dam/cp-sites/oral-care/oral-care-center/global/article/what-are-generic-drugs.jpeg'}
        />

        <Post
          nomeUsuario={'doguinhofeliz'}
          fotoUsuario={'https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg'}
          fotoPost={'https://www.hypeness.com.br/1/2019/09/Vira-lata_Caramelo_1.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
