
/* const blackJack = () =>{
   console.log('Welcome to Blackjack!')
   if (confirm('Start a new game?')){
            //creating user's hand
            const userCards = []
            userCards.push(comprarCarta())
            userCards.push(comprarCarta())
            
            //getting the property "valor" from the object "card"
            const userValues = userCards.map((card) =>{
               return Number(card.valor)
            })
            
            
            //getting the property "texto" from the object "card"
            const userTxt = userCards.map((card) =>{
               return (card.texto)
            })
            
            
            //creating cpu's hand
            const cpuCards = []
            cpuCards.push(comprarCarta())
            cpuCards.push(comprarCarta())
            
            //getting the property "valor" from the object "card"
            const cpuValues = cpuCards.map((card) =>{
               return Number(card.valor)
            })
        
            
            //getting the property "texto" from the object "card"
            const cpuTxt = cpuCards.map((card) =>{
               return (card.texto)
            })
          
            
            //adding function
            const finalValue = (array) =>{
               let total = 0
               for (let i = 0; i < array.length; i++) {
               total += array[i]
              }
              return total;
            }
            
            //creating messages...
            let userCardValueText = `User - cards: ${userTxt} - Score ${finalValue(userValues)}`
            let cpuCardValueText = `CPU - cards: ${cpuTxt} - Score ${finalValue(cpuValues)}`
            let drawText = `It's a draw!`
            let userWinText = `User's win!`
            let cpuWinText = `CPU's win!`
      
            //printing messages
            console.log(userCardValueText)
            console.log(cpuCardValueText)
            
            if (finalValue(userValues) > finalValue(cpuValues)){
               console.log(userWinText)
            }else if (finalValue(userValues) === finalValue(cpuValues)){
               console.log(drawText)
            }else{
               console.log(cpuWinText)
            }
   } else {
   console.log('The game is over')
}
}
blackJack()  */
