export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/")
}

export const goToPostDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}