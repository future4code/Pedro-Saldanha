export const goToHome = (history) => {
    history.push("/")
}

export const goToDetails = (history, id) => {
    history.push(`/movie/${id}`)
}