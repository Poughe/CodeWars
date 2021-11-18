function checkNucleotides(sequence) {
    for (let k = 0; k < sequence.length; k++) {
        if (!["A", "G", "C", "U"].includes(sequence[k]))
            return `There is an invalid letter: ${sequence[k]}. At position: ${k + 1}`
    }
    return "Valid Sequence: " + sequence
}

//https://www.codewars.com/kata/5a3325b4b6486ab367000064/solutions/javascript