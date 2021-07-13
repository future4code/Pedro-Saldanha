const tasks = [
	"Lavar a louça",
	"Comprar Tofu"
]

const addTask = (task) => {
    tasks.push(task)
    console.log(`Suas tarefas do dia são: ${tasks.join(', ')}`)
}

addTask(process.argv[2])