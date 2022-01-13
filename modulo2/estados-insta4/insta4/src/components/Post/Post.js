import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { IconeSalvar } from '../IconeSalvar/IconeSalvar'
import saveLogoWhite from '../../img/bookmark-white.svg'
import saveLogoBlack from '../../img/bookmark-black.svg'
import sendLogoWhite from '../../img/send-white.svg'
import sendLogoBlack from '../../img/send-black.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { IconeEnviar } from '../IconeEnviar/IconeEnviar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`



const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    enviando: false
  }
  
  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }
  
  onClickEnviar = () => {
    this.setState({
      enviando: !this.state.enviando
    })
  }
  
  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })
    if (!this.state.curtido){
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    } else {
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeSalvo
    if(this.state.salvo) {
      iconeSalvo = saveLogoBlack
    } else {
      iconeSalvo = saveLogoWhite
    }

    let iconeEnviado
    if(this.state.enviando) {
      iconeEnviado = sendLogoBlack;
    } else {
      iconeEnviado = sendLogoWhite
    }
    
    
    let iconeCurtida
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }


    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />


        <IconeSalvar 
          icone={iconeSalvo}
          onClickSalvar={this.onClickSalvar}
        />

        <IconeEnviar
          icone={iconeEnviado}
          onClickEnviar={this.onClickEnviar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}                             
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post