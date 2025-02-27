function numeroromano (num) {
    const valores = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ]
    let resultado = ""
    for (let [valor, simbolo] of valores) {
        while (num >= valor) {
            resultado += simbolo
            num -= valor
        }
    }
    return resultado 
}
console.log (numeroromano (4))
    