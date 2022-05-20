const salute = () => {
    const name = process.argv[2]
    const age = process.argv[3]
    const numericAge = Number(age)
    return `Olá, ${name}! Você tem ${numericAge} anos. Em sete anos você terá ${numericAge + 7}.`
}
console.log(salute())