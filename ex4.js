function fibonacci (n) {
    let seq = [0, 1]
    while (seq [seq.length - 1] + seq [seq.length - 2] <n) { 
      seq.push(seq [seq.length - 1] + seq [seq.length - 2])

    }
    
    console.log (seq)

}

    fibonacci (7)