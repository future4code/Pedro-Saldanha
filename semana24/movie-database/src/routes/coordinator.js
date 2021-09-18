export const goToHome = (history) => {
    history.pushState("/")
}

export const goToDetails = (history) => {
    history.pushState("/movie/:id")
}