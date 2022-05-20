function calculaPrecoTotal(quantidade) {
  let precoMaca
  quantidade < 12 ? precoMaca = 1.30 : precoMaca = 1
  return precoMaca * quantidade
}