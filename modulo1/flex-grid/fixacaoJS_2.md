function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let arrayRepeticao = []
    for (let i = 0; i < arrayDeNumeros.length; i++){
      if (arrayDeNumeros[i] === numeroEscolhido){
        arrayRepeticao.push(arrayDeNumeros[i])
        
      }
    }
    if (!arrayDeNumeros.includes(numeroEscolhido)){
        console.log('Número não encontrado')
    }else{
        console.log( `O número ${numeroEscolhido} aparece ${arrayRepeticao.length}x.`)
    }
} 