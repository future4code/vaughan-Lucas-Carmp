import React from 'react'


export const IconeEnviar = (props) =>{
    return <img onClick={props.onClickEnviar} src={props.icone} alt='Ícone de salvar'/>
}