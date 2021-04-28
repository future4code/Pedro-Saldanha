function adicionarTarefa() {
    const tarefaAdicionada = document.getElementById("tarefa")
    const diaSelecionado = document.getElementById("dias-semana")
    if ( tarefaAdicionada.value === "") {
        alert("Por favor, insira uma tarefa no dia correspondente.")
    }


    if (diaSelecionado.value === "domingo") {
        domingo.innerHTML += `<p>${tarefaAdicionada.value}</p>`
    } else if (diaSelecionado.value === "segunda") {
        segunda.innerHTML += `<p>${tarefaAdicionada.value}</p>`
    } else if (diaSelecionado.value === "terca") {
        terca.innerHTML += `<p>${tarefaAdicionada.value}</p>`
    } else if (diaSelecionado.value === "quarta") {
        quarta.innerHTML += `<p>${tarefaAdicionada.value}</p>`
    } else if (diaSelecionado.value === "quinta") {
        quinta.innerHTML += `<p>${tarefaAdicionada.value}</p>`
    } else if (diaSelecionado.value === "sexta") {
        sexta.innerHTML += `<p>${tarefaAdicionada.value}</p>`
    } else if (diaSelecionado.value === "sabado") {
        sabado.innerHTML += `<p>${tarefaAdicionada.value}</p>`
    }
    
   tarefaAdicionada.value =""
} 

