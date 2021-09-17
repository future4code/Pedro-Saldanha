// recebe duas strings
// pode adicionar um caractere
// pode remover um caractere
// pode substituir um caractere
// SÓ UMA dessas operações pode ser feita de uma vez


const isOneEdit = (str1, str2) => {
    if (str1 === str2) return false

    if (str1.length - str2.length > 1
        ||
        str2.length - str1.length > 1)
        return false

    if (str1.length > str2.length) return str1.includes(str2)
    if (str2.length > str1.length) return str2.includes(str1)

    let charsDiff = 0
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            charsDiff++
        }
    }

    return charsDiff === 1

}

console.log(isOneEdit("banana", "panana")) //true





