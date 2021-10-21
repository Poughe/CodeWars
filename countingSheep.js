function countSheeps(arrayOfSheep) {
    let total = 0;
    const sleep = array => {
        for (let i = 0; i < arrayOfSheep.length; i++) {
            if (arrayOfSheep[i] == 1) { total++ }
        }
    }
    sleep()
    return (total);
}

//https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript