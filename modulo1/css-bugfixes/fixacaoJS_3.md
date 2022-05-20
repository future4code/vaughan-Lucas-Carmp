function calculaNota(ex, p1, p2) {
  let media = (ex + p1 * 2 + p2 *3) / 6 
  if (media >= 9){
      media = "A"
  } else if (media < 9 && media >= 7.5){
      media =  "B"
  } else if (media < 7.5 && media >= 6){
      media = "C"
  } else {    
      media = "D"
  }
return media
}