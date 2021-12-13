const blackJack = () =>{
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
            
            //adding the "A" conditional (step 8)
            userTxt[0].includes("A")  && userTxt.includes("A") ? userCards.splice(0, 2, comprarCarta(), comprarCarta()) : null
            
            
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
            //adding the "A" conditional (step 8)
            cpuTxt[0].includes("A")  && cpuTxt.includes("A") ? cpuCards.splice(0, 2, comprarCarta(), comprarCarta()) : null
            //adding function
            const finalValue = (array) =>{
               let total = 0
               for (let i = 0; i < array.length; i++) {
               total += array[i]
              }
              return total;
            }
            
            //step 9: drawing and showing some user cards... step 10: asking the user while his/her score is under 21
            while (finalValue(userValues) < 21){
               if (confirm(`Your cards are ${userTxt}. The CPU's unveiled card is ${cpuTxt[0]}. \n Do you want to draw a card?`)){
               let userAddedValues = []
               userAddedValues.push(comprarCarta())
               for (let element of userAddedValues){
                  userTxt.push(element.texto)
                  userValues.push(element.valor)
               }
               //step 11: the cpu is drawing its cards... 
               }else {
               let cpuAddedValues = []
               while (finalValue(cpuValues) < finalValue(userValues)){
               cpuAddedValues.push(comprarCarta())
               for (let element of cpuAddedValues){
                  cpuTxt.push(element.texto)
                  cpuValues.push(element.valor)
               }
               }
               break
               }
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
            
            if (finalValue(userValues) > finalValue(cpuValues) && finalValue(userValues) <= 21){
               console.log(userWinText)
            }else if (finalValue(userValues) === finalValue(cpuValues)){
               console.log(drawText)
            }else if (finalValue(cpuValues) > finalValue(userValues) && finalValue(cpuValues) <= 21){
               console.log(cpuWinText)
            }else if (finalValue(userValues) > 21){
               console.log(cpuWinText)
            }else if (finalValue(cpuValues) > 21){
               console.log(userWinText)
            }
   } else {
   console.log('The game is over.')
}
}
blackJack() 

