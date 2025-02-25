function removerduplicados (arr) {
    return [...new Set (arr)]

}

console.log (removerduplicados ([1, 2, 2, 3, 4, 4, 5]))
