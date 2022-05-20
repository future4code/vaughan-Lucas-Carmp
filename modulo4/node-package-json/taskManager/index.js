const tasks = ["Jogar bola", "terminar o projeto"]
const taskManager = () => {
    const newTask = process.argv[2]
    tasks.push(newTask)
    return tasks
}
console.log(taskManager())