import React from 'react';
import './App.css';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/45296848_2046076175413846_8197242991937585152_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEczJTKcJguebXCmgb9a9ostYNSeqpsYeG1g1J6qmxh4SBxq00nOb3xNCkkkPWUMhNs8q2rdbbJ_pKaEvrhKVZN&_nc_ohc=y-qxQTp01s8AX-rgPC0&tn=Fx_Spwi411D3nJVZ&_nc_ht=scontent-gig2-1.xx&oh=00_AT8WORaZkA1Qzng86mZfqsHBAZUSlBlUuoxDp74WFPYYBw&oe=620252FD" 
          nome="Lucas Pasche" 
          descricao="Oi, meu nome é Lucas. Sou apaixonado por futebol, música e orientação a objetos. Conta comigo pra simplificar seu negócio e implementar soluções otimizadas!"
        />
      </div>
      
      <div className="page-section-container">
        <CardPequeno 
          imagem='https://static.vecteezy.com/ti/vetor-gratis/p1/581764-ilustracao-em-icone-email-gr%C3%A1tis-vetor.jpg'
          nome="E-mail:"
          descricao=" paschelucas9@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem='https://i.pinimg.com/736x/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg'
          nome="Endereço:"
          descricao="Rua dos Bobos, no. 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Skills</h2>
        <CardGrande 
          imagem="https://www.inventicons.com/uploads/iconset/1691/wm/512/Skills-68.png" 
          nome="Desenvolvimento orientado por testes" 
          descricao="Imagina que chato você desenvolver todo um projeto e, na última etapa antes do deploy, perceber que há bugs bem no começo do desenvolvimento! Quando se desenvolve e testa simultaneamente, isso não é um problema, garantindo otimização do tempo e de métodos para a sua equipe."
        />
      </div>


  


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudando desenvolvimento full stack." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
