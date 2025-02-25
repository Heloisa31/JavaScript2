function mediaarray (arr) {
    let soma = arr.reduce ((acc, num) => acc + num, 0)
    return soma / arr.length
}
console.log(mediaarray([10, 20, 30, 40]))
