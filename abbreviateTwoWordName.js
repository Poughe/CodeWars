function abbrevName(name) {
    let upperCase = name.toUpperCase();
    let splitName = upperCase.split(' ')
    return `${splitName[0][0]}.${splitName[1][0]}`

}

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript