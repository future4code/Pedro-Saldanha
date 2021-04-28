let postsPostados = []

function adicionarPost() {
    const tituloAdicionado = document.getElementById("titulo-post")
    const autorAdicionado = document.getElementById("autor-post")
    const conteudoAdicionado = document.getElementById("conteudo-post")
    const imagemAdicionada = document.getElementById("img-post")
    const infosPost = { 
        titulo: tituloAdicionado.value,
        autor: autorAdicionado.value,
        conteudo: conteudoAdicionado.value,
        imagem: imagemAdicionada.value
    }
    if (infosPost.titulo !== "" && infosPost.autor !== "" && infosPost.conteudo !== ""){ 
       posts.innerHTML += `<div class="postAdicionado"><h2>${infosPost.titulo}</h2><h5>Por: ${infosPost.autor}</h5><img src="${infosPost.imagem}"><p>${infosPost.conteudo}</p></div>`
       postsPostados.push(infosPost)
    } else {
        alert("Por favor, preencha os campos para adicionar uma postagem")
    }

    

    tituloAdicionado.value = ""
    autorAdicionado.value = ""
    conteudoAdicionado.value = ""
    imagemAdicionada.value = ""

    console.log(postsPostados)

    return infosPost
}



